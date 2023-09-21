# Generated by Django 4.2.5 on 2023-09-21 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=500)),
                ('body', models.TextField()),
                ('banner', models.ImageField(upload_to='banners/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]