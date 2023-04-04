from rest_framework import serializers
from .models import Comment

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CommentSerializer(serializers.CommentSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text', 'user', 'tip']
        depth = 1
