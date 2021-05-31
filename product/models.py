from django.db import models

# Create your models here.

CLASSIFYTATUS_CHOICES = (('Smart', 'Smart'), ('Other', 'Other'),
                         ('Classic', 'Classic'), ('Sports', 'Sports'))


class Product(models.Model):
    name = models.CharField(max_length=255)
    content = models.TextField()
    price = models.IntegerField()
    count = models.IntegerField()
    classify = models.CharField(max_length=100, choices=CLASSIFYTATUS_CHOICES, default='Smart')
    deleted_at = models.DateTimeField()

    class Meta:
        db_table = "product"
        verbose_name = '商品明細'
        verbose_name_plural = '商品明細'

    def __str__(self):
        return self.name

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
    url = models.ImageField(upload_to='static/image_fold/')
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField()

    class Meta:
        db_table = "product_img"
        verbose_name = '商品圖片明細'
        verbose_name_plural = '商品圖片明細'

    def to_json(self):
        return {
            "id": self.id,
            "product": self.product,
            "url": self.url,
            "name": self.product.name
        }
