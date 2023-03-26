from django.db import models
from authentication.models import User

# Create your models here.

class Tip(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=300)
    link = models.CharField(max_length=200)
    image = models.ImageField()
    favorite_count = models.IntegerField()
    date = models.DateField()
    category = models.CharField(max_length=25)