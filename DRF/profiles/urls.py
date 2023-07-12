from django.urls import path, include
from . import views

urlpatterns = [
    path('<int:id>/', views.ProfileDetail.as_view()),
]