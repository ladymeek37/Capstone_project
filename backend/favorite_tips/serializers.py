from rest_framework import serializers
from .models import FavoriteTip

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class FavoriteTipSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteTip
        fields = ['id', 'user', 'tip_id', 'tip']
        depth = 2
    tip_id = serializers.IntegerField(write_only=True)
    # adding "tip_id = serializers.IntegerField(write_only=True)" to serializer allows body in post request to refer to the tip that is being refrenced
    