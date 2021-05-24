from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    username = models.CharField(unique=True, max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    phone = models.CharField(max_length=10)
    birth = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField()

    class Meta:
        db_table = "user"
        verbose_name = '用戶列表'
        verbose_name_plural = '用戶列表'
    
    def __str__(self):
        return self.username
    
    def to_json(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "phone": self.phone,
            "birth": self.birth
        }
