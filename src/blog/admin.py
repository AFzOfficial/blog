from django.contrib import admin
from django.contrib.auth.models import Group, User
from .models import Post

admin.site.site_header = "Blog"
admin.site.index_title = "Blog"

admin.site.unregister(Group)
admin.site.unregister(User)

admin.site.register(Post)
