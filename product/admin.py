from django.contrib import admin
from product.models import Product, ProductImg
# Register your models here.


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'content', 'price', 'count', 'classify',
                    'deleted_at')
    list_per_page = 20
    list_filter = ('classify', 'deleted_at')
    search_fields = ('name', 'content', 'deleted_at')
    exclude = ('deleted_at',)


@admin.register(ProductImg)
class ProductImgAdmin(admin.ModelAdmin):
    list_display = ('product', 'url', 'created_at', 'deleted_at')
    list_per_page = 20
    list_filter = ('created_at', 'deleted_at')
    search_fields = ('product', 'created_at', 'deleted_at')
    exclude = ('created_at', 'deleted_at')
