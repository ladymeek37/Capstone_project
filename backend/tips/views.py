from django.shortcuts import render
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Tip
from .serializers import TipSerializer
# Create your views here.

#api reqiest to get all tips
@api_view(['GET'])
@permission_classes([AllowAny])
def tips_list(request):
    tips = Tip.objects.all()
    serializer = TipSerializer(tips, many=True)
    return Response(serializer.data)


#api request to post a new tip
@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def user_tip(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = TipSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        tips = Tip.objects.filter(user_id=request.user.id)
        serializer = TipSerializer(tips, many=True)
        return Response(serializer.data)





