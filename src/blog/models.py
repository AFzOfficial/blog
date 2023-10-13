from django.db import models

class IpAddress(models.Model):
    ip_address = models.GenericIPAddressField()

class Post(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    body = models.TextField()
    banner = models.ImageField(upload_to='banners/')
    created_at = models.DateTimeField(auto_now_add=True)

    hits = models.ManyToManyField(IpAddress, related_name='hits', blank=True)

    def __str__(self) -> str:
        return self.title
