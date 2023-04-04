from django.urls import path
from . import views

urlpatterns = [
    path("", views.tips_list),
]