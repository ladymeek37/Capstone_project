from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Tip
from .serializers import TipSerializer
# Create your views here.

@api_view(['GET'])
def tips_list(request):
    tips = Tip.objects.all()


    serializer = TipSerializer(tips, many=True)

    
    return Response(serializer.data)
