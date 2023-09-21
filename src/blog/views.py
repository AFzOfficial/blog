from django.shortcuts import render
from .models import Post



def index(request):
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'blog/index.html', {'posts': posts})


def detail(request, id: int):
    post = Post.objects.get(id=id)
    return render(request, 'blog/detail.html', {'post': post})