from django.contrib import admin
from product.models import Product, ProductImg
# Register your models here.

class ProductImgInline(admin.TabularInline):
    model = ProductImg
    exclude = ('created_at', 'deleted_at')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'content', 'price', 'count', 'classify',
                    'deleted_at')
    list_per_page = 20
    list_filter = ('classify', 'deleted_at')
    search_fields = ('name', 'content', 'deleted_at')
    exclude = ('deleted_at', )
    inlines = [
        ProductImgInline,
    ]