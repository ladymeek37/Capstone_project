from django.db import models
from authentication.models import User
from tips.models import Tip

class FavoriteTip(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)    
    tip = models.ForeignKey(Tip, null=True, on_delete=models.CASCADE)
    def get_category_display(self):
        for choice in Tip.category_choices:
            if choice[0] == Tip.category:
                return choice[1]

