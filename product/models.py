from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=255)
    content = models.TextField(max_length=255)
    price = models.IntegerField()
    count = models.IntegerField()
    classify = models.CharField(max_length=100)
    deleted_at = models.DateTimeField()

    class Meta:
        db_table = "product"

    def to_json(self):
        return {
            "id": self.id,
            "number": self.id + 1000000,
            "name": self.name,
            "content": self.content,
            "price": self.price,
            "count": self.count,
            "classify": self.classify
        }


class ProductImg(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    url = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField()

    class Meta:
        db_table = "product_img"

    def to_json(self):
        return {
            "id": self.id,
            "product": self.product,
            "url": self.url,
            "name": self.product.name
        }
