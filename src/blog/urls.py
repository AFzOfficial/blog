from django.urls import path
from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name="index"),
    path('page/<int:page>', views.IndexView.as_view(), name="index"),
    
    path('post/<int:id>', views.DetailView.as_view(), name="detail")
]
