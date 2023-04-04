from rest_framework import serializers
from .models import FavoriteTip

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class FavoriteTipSerializer(serializers.FavoriteTipSerializer):
    class Meta:
        model = FavoriteTip
        fields = ['id', 'user', 'tip']
        depth = 1