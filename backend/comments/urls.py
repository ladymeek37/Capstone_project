from django.urls import path
from . import views

urlpatterns = [
    # path("comments/<int:fk>/", views.comments_by_tip_id),
    path("all/", views.comments_list),
    path("<int:pk>/", views.comments_by_tip_id)
]