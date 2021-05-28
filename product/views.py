from django import http
from django.db.models import Q
from django.views.generic import ListView

from product.models import Product, ProductImg


# Create your views here.


class ProductIndexView(ListView):
    def get_queryset(self):
        return Product.objects.all().filter(deleted_at=None).order_by('-count')[:5]

    def render_to_response(self, context, **response_kwargs):
        product_obj = context['object_list']
        data = {'meta': {}, 'objects': []}
        for product in product_obj:
            data['objects'].append(product.to_json())
            productimgs = product.productimg_set.all()
            imgs = []
            for productimg in productimgs:
                imgs.append(productimg.url.url)
                data['objects'][-1].update({'imgs': imgs})
        return http.JsonResponse(data)


class ProductListView(ListView):
    def get_queryset(self):
        query = Q(deleted_at=None)
        name = self.request.GET.get('name', None)
        if name:
            query = query & Q(name__icontains=name)
        classify = self.request.GET.get('classify', None)
        if classify and classify != 'All':
            query = query & Q(classify=classify)

        queryset = Product.objects.filter(query)
        return queryset

    def render_to_response(self, context, **response_kwargs):
        product_obj = context['object_list']
        data = {'meta': {}, 'objects': []}
        for product in product_obj:
            data['objects'].append(product.to_json())
            productimgs = product.productimg_set.all()
            imgs = []
            for productimg in productimgs:
                imgs.append(productimg.url.url)
                data['objects'][-1].update({'imgs': imgs})
        return http.JsonResponse(data)


class ProductDetailView(ListView):
    def get_queryset(self):
        product_id = self.kwargs.get('id', None)
        product = Product.objects.filter(id=product_id, deleted_at=None).first()
        return product

    def render_to_response(self, context, **response_kwargs):
        product_obj = context['object_list']
        data = {'meta': {}, 'objects': []}

        data['objects'].append(product_obj.to_json())
        productimgs = product_obj.productimg_set.all()
        imgs = []
        for productimg in productimgs:
            imgs.append(productimg.url.url)
            data['objects'][-1].update({'imgs': imgs})
        return http.JsonResponse(data)