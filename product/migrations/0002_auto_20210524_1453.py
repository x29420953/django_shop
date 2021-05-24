# Generated by Django 3.2 on 2021-05-24 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name': '商品明細', 'verbose_name_plural': '商品明細'},
        ),
        migrations.AlterModelOptions(
            name='productimg',
            options={'verbose_name': '商品圖片明細', 'verbose_name_plural': '商品圖片明細'},
        ),
        migrations.AlterField(
            model_name='product',
            name='classify',
            field=models.CharField(choices=[('Smart', 'Smart'), ('Other', 'Other'), ('Classic', 'Classic'), ('Sports', 'Sports')], default='Smart', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='content',
            field=models.TextField(),
        ),
    ]
