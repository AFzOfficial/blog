# Generated by Django 4.2.5 on 2023-10-13 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='IpAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.GenericIPAddressField()),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='hits',
            field=models.ManyToManyField(blank=True, related_name='hits', to='blog.ipaddress'),
        ),
    ]