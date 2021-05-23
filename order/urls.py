from django.urls import path
from order import views

urlpatterns = [
    path('cart/', views.CartView.as_view(), name='order_cart'),
    path('order/', views.TotalOrderView.as_view(), name='order_order'),
    path('order/<int:id>/', views.TotalOrderDetailView.as_view(), name='order_detail')
]
