from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import FavoriteTip
from .serializers import FavoriteTipSerializer
# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_favorited_tips(request):
    favorite_tips = FavoriteTip.objects.filter(user_id=request.user.id)
    serializer = FavoriteTipSerializer(favorite_tips, many=True)
    return Response(serializer.data)