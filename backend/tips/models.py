from django.db import models
from authentication.models import User

# Create your models here.

category_choices = (
    (1, "Yoga/Stretching"),
    (2, "Diet/Supplements"),
    (3, "Lifestyle/Other")
)

# lets us explicitly set upload path and filename
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Tip(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=300)
    link = models.CharField(max_length=200)
    image_url = models.ImageField(upload_to=upload_to)
    favorite_count = models.IntegerField(choices=category_choices, blank=True, null=True)
    date = models.DateField()
    category = models.IntegerField()