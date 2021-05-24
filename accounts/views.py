from django import http
from django.contrib.auth import logout
import json
from functools import wraps

from accounts.models import User
from accounts.forms import LoginForm, RegisterForm, ModifyForm

# Create your views here.


def user_info(request):
    user = request.user
    if not user.is_authenticated:
        data = {"status": "401", "message": "請登入"}
        return http.JsonResponse(data, status=401)
    else:
        return http.JsonResponse(user.to_json())


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            user = form.do_login(request)
            print(user)
            return http.JsonResponse(user.to_json())
        else:
            err = json.loads(form.errors.as_json())
            return http.JsonResponse(err['__all__'][0], status=400)


def user_logout(request):
    logout(request)
    return http.HttpResponse(status=201)


def user_modify(request):
    if request.method == 'POST':
        form = ModifyForm(request.POST)
        if form.is_valid():
            user = form.do_modify(request)
            return http.JsonResponse(user.to_json())
        else:
            err = json.loads(form.errors.as_json())
            return http.JsonResponse(err['phone'][0], status=400)


def user_register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.do_register(request)
            return http.JsonResponse(user.to_json())
        else:
            err = json.loads(form.errors.as_json())
            return http.JsonResponse(err['username'][0], status=400)
