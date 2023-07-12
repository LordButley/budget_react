from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer
from django.shortcuts import get_object_or_404

class ProfileDetail(APIView):
    serializer_class = ProfileSerializer
    def get(self,request, id):
        print(id)
        profile = get_object_or_404(Profile, id=id)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, id):
        profile = get_object_or_404(Profile, id=id)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)