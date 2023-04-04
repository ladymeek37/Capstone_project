from django.db import models
from authentication.models import User
from tips.models import Tip

class FavoriteTip(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)    
    tip = models.ForeignKey(Tip, null=True, on_delete=models.CASCADE)