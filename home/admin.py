from django.contrib import admin

from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    '''Admin View for Task'''

    list_display = ('title',)
