from django.views.generic import View, DetailView, ListView, TemplateView
from django.shortcuts import get_object_or_404

class IndexView(TemplateView):
    template_name = "./index.html"