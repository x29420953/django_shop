from django.contrib import admin
from accounts.models import User
from django.contrib.auth.admin import UserAdmin

# Register your models here.

@admin.register(User)
class ProductAdmin(UserAdmin):
    list_display = ('username', 'email', 'phone', 'birth', 'created_at', 'update_at',
                    'deleted_at', 'is_active', 'is_staff')
    list_per_page = 20
    list_filter = ('is_active', 'is_staff', 'created_at', 'update_at', 'deleted_at')
    search_fields = ('username', 'email', 'phone', 'birth')

    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('email', 'phone', 'birth')}),
    )

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('phone', 'birth')}),
    )

    actions = ['disable_user', 'enable_user']

    def disable_user(self, request, queryset):
        queryset.update(is_active=False)

    disable_user.short_description = '整批禁用'

    def enable_user(self, request, queryset):
        queryset.update(is_active=True)

    enable_user.short_description = '整批啟用'