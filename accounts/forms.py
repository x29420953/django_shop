import re
from django import forms
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token

from accounts.models import User
#from utils import constants

class LoginForm(forms.Form):
    username = forms.CharField(label='帳號',
                               required=True,
                               max_length=16,
                               min_length=4)
    password = forms.CharField(label='密碼',
                               required=True,
                               max_length=200,
                               min_length=4)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.user = None

    def clean(self):
        data = super().clean()

        if self.errors:
            return
        username = data.get('username', None)
        password = data.get('password', None)
        user = authenticate(username=username, password=password)
        if user is None:
            raise forms.ValidationError('帳號或密碼錯誤')
        else:
            if not user.is_active:
                raise forms.ValidationError('帳號已被禁用')
        self.user = user
        return data

    def do_login(self, request):
        user = self.user

        old_token = Token.objects.filter(user=user)
        old_token.delete()

        token = Token.objects.create(user=user)

        login(request, user)
        return user


class RegisterForm(forms.Form):
    username = forms.CharField(label='帳號',
                               max_length=16,
                               min_length=4,
                               required=True,
                               error_messages={'required': '請輸入帳號'})
    password = forms.CharField(label='密碼',
                               max_length=200,
                               min_length=4,
                               required=True,
                               error_messages={'required': '請輸入密碼'})
    email = forms.EmailField(label='電子信箱',
                             required=True,
                             error_messages={'required': '請輸入電子信箱'})
    phone = forms.CharField(label='手機',
                            max_length=10,
                            required=True,
                            error_messages={'required': '請輸入手機'})
    birth = forms.DateField(label='生日',
                            required=True,
                            error_messages={'required': '請輸入生日'})

    def clean_username(self):
        username = self.cleaned_data['username']
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError('帳號已被使用')
        return username

    def clean_phone(self):
        phone = self.cleaned_data['phone']
        pattern = "^[0][9][0-9]{8}$"
        if not re.search(pattern, phone):
            raise forms.ValidationError('手機不正確')
        return phone
    '''
    def clean_birth(self):
        birth = self.cleaned_data['birth']
        pattern = "(\d{4})[-](\d{2})[-](\d{2})"
        if not re.search(pattern, birth):
            raise forms.ValidationError('生日不正確')
        return birth
    '''

    def do_register(self, request):
        data = self.cleaned_data
        try:
            user = User.objects.create_user(
                username=data.get('username', None),
                password=data.get('password', None),
                email=data.get('email', None),
                phone=data.get('phone', None),
                birth=data.get('birth', None))
            login(request, user)
            return user
        except Exception as e:
            print(e)
            return None
