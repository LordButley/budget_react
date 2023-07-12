from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.owner}'s profile"
