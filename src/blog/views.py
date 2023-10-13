from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Post



def index(request, page: int = 1):
    posts = Post.objects.all().order_by('-created_at', )
    paginator = Paginator(posts, 10)
    page_object = paginator.get_page(page)
    page_object.adjusted_elided_pages = paginator.get_elided_page_range(page)

    return render(request, 'blog/index.html', {'posts': page_object})


def detail(request, id: int):
    post = Post.objects.get(id=id)

    ip_address = request.user.ip_address
    if ip_address not in post.hits.all():
        post.hits.add(ip_address)
        post.save()

    return render(request, 'blog/detail.html', {'post': post})
