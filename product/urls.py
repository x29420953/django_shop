from django.urls import path

from product import views

urlpatterns = [
    path('index/', views.ProductIndexView.as_view(), name="product_index"),
    path('product/', views.ProductListView.as_view(), name="product_list"),
    path('product/<int:id>/', views.ProductDetailView.as_view(), name="product_detail")
]
