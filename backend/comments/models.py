from django.db import models
from authentication.models import User
from tips.models import Tip

class Comment(models.Model):
    tip = models.ForeignKey(Tip)
    user = models.ForeignKey(User)
    text = models.CharField(max_length=400)