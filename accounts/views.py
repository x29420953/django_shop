import json
from django import http
from django.contrib.auth import logout
from rest_framework.views import APIView

from accounts.models import User
from accounts.forms import LoginForm, RegisterForm, ModifyForm

# Create your views here.


class LogoutView(APIView):
    def get(self, request):
        logout(request)
        return http.HttpResponse(status=201)


class UserView(APIView):
    def get(self, request):
        user = request.user
        if not user.is_authenticated:
            data = {"status": "401", "message": "請登入"}
            return http.JsonResponse(data, status=401)
        else:
            return http.JsonResponse(user.to_json())

    def put(self, request):
        form = ModifyForm(request.POST)
        if form.is_valid():
            user = form.do_modify(request)
            return http.HttpResponse(status=200)
        else:
            err = json.loads(form.errors.as_json())
            return http.JsonResponse(err['phone'][0], status=400)


class LoginView(APIView):
    def post(self, request):
        form = LoginForm(request.POST)
        if form.is_valid():
            user = form.do_login(request)
            return http.JsonResponse(user.to_json())
        else:
            err = json.loads(form.errors.as_json())
            return http.JsonResponse(err['__all__'][0], status=400)


class RegisterView(APIView):
    def post(self, request):
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.do_register(request)
            return http.JsonResponse(user.to_json())
        else:
            err = json.loads(form.errors.as_json())
            return http.JsonResponse(err['username'][0], status=400)
