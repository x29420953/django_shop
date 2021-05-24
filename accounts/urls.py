from django.urls import path
from accounts import views

urlpatterns = [
    path('info/', views.user_info, name='user_info'),
    path('login/', views.user_login, name='user_login'),
    path('logout/', views.user_logout, name='user_logout'),
    path('register/', views.user_register, name='user_register'),
    path('modify/', views.user_modify, name='user_modify')
]
