from django.contrib import admin
from order.models import Order, TotalOrder
# Register your models here.


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'price', 'count', 'user', 'product', 'total_order',
                    'deleted_at',)
    list_per_page = 20
    list_filter = ('product', 'deleted_at')
    search_fields = ('user__username', 'product__name', 'total_order__id', 'deleted_at')
    exclude = ('deleted_at', )


@admin.register(TotalOrder)
class TotalOrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'status', 'total_price', 'total_count', 'user',
                    'name', 'address', 'phone', 'created_at', 'update_at')
    list_per_page = 20
    list_filter = ('status', 'created_at', 'update_at')
    search_fields = ('user__username', 'name', 'address', 'phone', 'created_at', 'update_at')
    exclude = ('created_at', 'update_at')