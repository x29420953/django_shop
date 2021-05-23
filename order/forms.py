from django import forms
import datetime, re

from order.models import Order, TotalOrder, Product


class CartOrderForm(forms.Form):
    count = forms.IntegerField(label='數量', required=False)
    price = forms.IntegerField(label='價格', required=False)
    user = forms.IntegerField(label='用戶', required=False)
    product = forms.IntegerField(label='商品', required=False)
    order = forms.IntegerField(label='訂單', required=False)

    def clean_product(self):
        product_id = self.cleaned_data['product']
        product = Product.objects.filter(deleted_at=None, id=product_id).first()
        if product is None:
            raise forms.ValidationError('商品異動，請重新整理')
        self.cleaned_data['price'] = product.price * self.cleaned_data['count']
        return product_id

    def do_cart_post(self, request):
        data = self.cleaned_data
        print(data)
        check_obj = Order.objects.filter(product=data['product'],
                                         user=data['user'],
                                         deleted_at=None).first()
        print(check_obj)
        try:
            if check_obj:
                check_obj.count=data.get('count') + check_obj.count
                check_obj.price=data.get('price') + check_obj.price
                check_obj.save()
            else:
                Order.objects.create(
                    count=data.get('count'),
                    price=data.get('price'),
                    product_id=data.get('product'),
                    user_id=data.get('user'))
        except Exception as e:
            print(e)
            return None

    def do_cart_put(self, request):
        data = self.cleaned_data
        print(data)
        check_obj = Order.objects.filter(product=data['product'],
                                         user=data['user'],
                                         deleted_at=None).first()
        print(check_obj)
        try:
            if check_obj:
                check_obj.count = data.get('count')
                check_obj.price = data.get('price')
                check_obj.save()
        except Exception as e:
            print(e)
            return None

    def do_cart_delete(self, request):
        data = self.data["order"]
        print(data)
        order = Order.objects.filter(deleted_at=None,
                                     id=data).first()
        print(order)
        try:
            order.deleted_at = datetime.datetime.now()
            order.save()
        except Exception as e:
            print(e)
            return None


class TotalOrderForm(forms.Form):
    name = forms.CharField(label='姓名',
                           required=True,
                           error_messages={'required': '請輸入收件人姓名'})
    phone = forms.CharField(label='手機',
                            max_length=10,
                            required=True,
                            error_messages={'required': '請輸入收件人手機'})
    address = forms.CharField(label='地址',
                              required=True,
                              error_messages={'required': '請輸入收件人地址'})
    totalcount = forms.IntegerField(label='數量', required=False)
    totalprice = forms.IntegerField(label='價格', required=False)
    user = forms.IntegerField(label='用戶', required=False)
    orders = forms.IntegerField(label='用戶', required=False)

    def clean_phone(self):
        phone = self.cleaned_data['phone']
        pattern = "^[0][9][0-9]{8}$"
        if not re.search(pattern, phone):
            raise forms.ValidationError('手機不正確')
        return phone

    def clean_orders(self):
        totalcount=0
        totalprice=0
        user = self.cleaned_data['user']
        orders = Order.objects.filter(deleted_at=None, user=user).all()
        if len(orders) == 0:
            raise forms.ValidationError('購物車是空的')
        for order in orders:
            order.product.count -= order.count
            if order.product.count < 0:
                raise forms.ValidationError('商品異動，請重新整理')
            #order.save()
            totalcount += order.count
            totalprice += order.price
        self.cleaned_data['totalcount'] = totalcount
        self.cleaned_data['totalprice'] = totalprice
        return orders

    def do_totalorder(self, request):
        data = self.cleaned_data
        print(data)
        try:
            totalorder = TotalOrder.objects.create(
                name=data.get('name'),
                phone=data.get('phone'),
                address=data.get('address'),
                total_price=data.get('totalprice'),
                total_count=data.get('totalcount'),
                user_id=data.get('user'))
            for order in data.get('orders'):
                order.total_order_id = totalorder.id
                order.deleted_at = datetime.datetime.now()
                order.save()
        except Exception as e:
            print(e)
            return None