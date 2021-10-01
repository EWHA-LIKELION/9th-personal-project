from django.shortcuts import render
from .models import *
import json 
# Create your views here.
def home(request):
    date = Date.objects
    return render(request, 'home.html', {'today':date})

def show_record_view(request):
    post=Post.objects
    return render(request, 'recordshow.html', {'posts':post})

def post_list(request):
    posts=Post.objects.all()
    context={
        "posts" : posts,
        "posts_js": json.dumps([post.json() for post in posts])
    }
    return render(request, "recordshow.html", str(context))
