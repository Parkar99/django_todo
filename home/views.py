from django.shortcuts import render
from django.views import View

from .models import Task

from datetime import datetime


class Index(View):
    def get(self, request):
        tasks = Task.objects.all()

        context = {
            'title': 'TODO | Home',
            'tasks': tasks,
        }

        return render(request, 'index.html', context)
