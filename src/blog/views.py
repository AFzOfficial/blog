from django.shortcuts import render
from django.views import View
from django.core.paginator import Paginator
from .models import Post


class IndexView(View):
    template_name = 'blog/index.html'
    paginate_by = 10

    def get(self, request, page=1):
        posts = Post.objects.all().order_by('-created_at', )
        paginator = Paginator(posts, self.paginate_by)
        page_object = paginator.get_page(page)
        page_object.adjusted_elided_pages = paginator.get_elided_page_range(page)

        return render(request, self.template_name, {'posts': page_object})


class DetailView(View):
    
    def get(self, request, id: int):
        post = Post.objects.get(id=id)

        ip_address = request.user.ip_address
        if ip_address not in post.hits.all():
            post.hits.add(ip_address)
            post.save()

        return render(request, 'blog/detail.html', {'post': post})
