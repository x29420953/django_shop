# Generated by Django 3.2 on 2021-05-28 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20210524_1453'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimg',
            name='url',
            field=models.ImageField(upload_to='static/image_fold/'),
        ),
    ]
