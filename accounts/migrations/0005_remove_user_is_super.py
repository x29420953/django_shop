# Generated by Django 3.2 on 2021-05-14 02:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_alter_user_table'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_super',
        ),
    ]
