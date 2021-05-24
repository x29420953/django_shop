from django import http
import json, datetime
from rest_framework.views import APIView

from order.models import Order, TotalOrder
from accounts.models import User
from order.forms import CartOrderForm, TotalOrderForm
# Create your views here.

class CartView(APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        if not user.is_authenticated:
            data = {"status": "401", "message": "請登入"}
            return http.JsonResponse(data, status=401)
        else:
            order_obj = Order.objects.filter(deleted_at=None, user=user.id)
            data = {'meta': {}, 'objects': []}
            for order in order_obj:
                if order.product.count == 0 or order.product.deleted_at != None:
                    order.deleted_at = datetime.datetime.now()
                    order.save()
                    continue
                if order.count > order.product.count:
                    order.count = order.product.count
                    order.price = order.count * order.product.price
                    order.save()
                data['objects'].append(order.to_json())
                productimg = order.product.productimg_set.first()
                data['objects'][-1].update({'img': productimg.url})
            return http.JsonResponse(data)

    def post(self, request, *args, **kwargs):
        user = request.user
        if not user.is_authenticated:
            data = {"status": "401", "message": "請登入"}
            return http.JsonResponse(data, status=401)
        else:
            form = CartOrderForm(request.POST)
            if form.is_valid():
                order = form.do_cart_post(request)
                return http.HttpResponse(status=200)
            else:
                err = json.loads(form.errors.as_json())
                return http.JsonResponse(err['product'][0], status=400)

    def put(self, request, *args, **kwargs):
        form = CartOrderForm(request.POST)
        if form.is_valid():
            order = form.do_cart_put(request)
            return http.HttpResponse(status=200)
        else:
            err = json.loads(form.errors.as_json())
            return http.JsonResponse(err['product'][0], status=400)

    def patch(self, request, *args, **kwargs):
        form = CartOrderForm(request.POST)
        if form:
            order = form.do_cart_delete(request)
            return http.HttpResponse(status=200)
        else:
            err = json.loads(form.errors.as_json())
            return http.JsonResponse(err['product'][0], status=400)


class TotalOrderView(APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        if not user.is_authenticated:
            data = {"status": "401", "message": "請登入"}
            return http.JsonResponse(data, status=401)
        else:
            status = self.request.GET.get('status')
            if status == 'undefined':
                status = 0
            totalorder_obj = TotalOrder.objects.filter(user=user.id,
                                                       status=status)
            data = {'meta': {}, 'objects': []}
            for totalorder in totalorder_obj:
                data['objects'].append(totalorder.to_json())
                orders = Order.objects.filter(total_order=totalorder.id)
                order_obj = []
                for order in orders:
                    order_obj.append(order.to_json())
                    data['objects'][-1].update({'order': order_obj})
                    productimg = order.product.productimg_set.first()
                    data['objects'][-1]['order'][-1].update({'img': productimg.url})
            return http.JsonResponse(data)

    def post(self, request, *args, **kwargs):
        form = TotalOrderForm(request.POST)
        if form.is_valid():
            order = form.do_totalorder(request)
            return http.HttpResponse(status=200)
        else:
            err = json.loads(form.errors.as_json())
            return http.JsonResponse(err['orders'][0], status=400)


class TotalOrderDetailView(APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        if not user.is_authenticated:
            data = {"status": "401", "message": "請登入"}
            return http.JsonResponse(data, status=401)
        else:
            id = self.kwargs.get('id')
            totalorder_obj = TotalOrder.objects.filter(user=user.id, id=id)
            data = {'meta': {}, 'objects': []}
            for totalorder in totalorder_obj:
                data['objects'].append(totalorder.to_json())
                orders = Order.objects.filter(total_order=totalorder.id)
                order_obj = []
                for order in orders:
                    order_obj.append(order.to_json())
                    data['objects'][-1].update({'order': order_obj})
                    productimg = order.product.productimg_set.first()
                    data['objects'][-1]['order'][-1].update(
                        {'img': productimg.url})
            return http.JsonResponse(data)