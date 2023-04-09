from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.tips_list),
    path("", views.user_tip),
]