from django.urls import path
from accounts import views


urlpatterns = [
    path('login/', views.LoginView.as_view(), name='user_login'),
    path('logout/', views.LogoutView.as_view(), name='user_logout'),
    path('register/', views.RegisterView.as_view(), name='user_register'),
    path('user/', views.UserView.as_view(), name='user_user')
]
