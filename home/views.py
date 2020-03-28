from django.shortcuts import render
from django.http import JsonResponse
from django.views import View

from .models import Task

from datetime import datetime
import json


class Index(View):
    def get(self, request):
        tasks = Task.objects.all()

        context = {
            'title': 'TODO | Home',
            'tasks': tasks,
        }

        return render(request, 'index.html', context)

    def post(self, request):
        data = json.loads(request.body)

        if data['task'] == "":
            return JsonResponse({'details': 'error'})
        else:
            task_text = data['task']

            task = Task(title=task_text)
            task.save()

            return JsonResponse({'details': 'success'})

    def delete(self, request):
        data = json.loads(request.body)

        if data['id'] == "":
            return JsonResponse({'details': 'error'})
        else:
            task_id = data['id']

            try:
                task = Task.objects.get(id=task_id)

                task.delete()

                return JsonResponse({'details': 'success'})
            except Task.DoesNotExist:
                return JsonResponse({'details': 'error'})

    def patch(self, request):
        data = json.loads(request.body)

        if data['id'] == "":
            return JsonResponse({'details': 'error'})
        else:
            task_id = data['id']
            task_is_done = data['is_done']

            try:
                task = Task.objects.get(id=task_id)

                task.is_done = task_is_done
                task.save()

                return JsonResponse({'details': 'success'})
            except Task.DoesNotExist:
                return JsonResponse({'details': 'error'})
