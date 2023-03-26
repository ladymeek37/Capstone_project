from rest_framework import serializers
from .models import Tip


class TipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tip
        fields = ['id', 'title', 'text', 'link', 'image', 'favorite_count', 'date', 'category', 'user_id']
        depth = 1