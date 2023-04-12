from django.shortcuts import render
from .models import Comment
from .serializers import CommentSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

#get all comments
@api_view(['GET'])
@permission_classes([AllowAny])
def comments_list(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)
    


#get comments by tip ID
@api_view(['GET'])
@permission_classes([AllowAny])
def comments_by_tip_id(request, tip_id):
    comments = Comment.objects.filter(tip_id=tip_id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

