from django.db import models
from accounts.models import User
from product.models import Product

# Create your models here.

ORDERSTATUS_CHOICES = ( ('0', '待出貨'),
                        ('1', '待收貨'),
                        ('2', '已完成'),
                        ('3', '已取消'))


class TotalOrder(models.Model):
    status = models.CharField(max_length=50,
                              choices=ORDERSTATUS_CHOICES,
                              default='0')
    total_price = models.IntegerField()
    total_count = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "total_order"
        verbose_name = '訂單明細'
        verbose_name_plural = '訂單明細'

    def to_json(self):
        return {
            "id": self.id,
            "number": self.id + 1000000,
            "status": self.status,
            "total_price": self.total_price,
            "total_count": self.total_count,
            "name": self.name,
            "address": self.address,
            "phone": self.phone,
            "created_at": self.created_at.strftime("%Y-%m-%d %H:%M:%S"),
            "update_at": self.update_at.strftime("%Y-%m-%d %H:%M:%S")
        }


class Order(models.Model):
    price = models.IntegerField()
    count = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    deleted_at = models.DateTimeField()
    total_order = models.ForeignKey(TotalOrder, on_delete=models.CASCADE)

    class Meta:
        db_table = "order"
        verbose_name = '購物車明細'
        verbose_name_plural = '購物車明細'

    def to_json(self):
        return {
            "orderid": self.pk,
            "price": self.price,
            "count": self.count,
            "product_id": self.product.id,
            "product": self.product.name,
            "product_price": self.product.price,
            "product_count": self.product.count,
            "user_id": self.user.id
        }