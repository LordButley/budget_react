from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Payment
from .serializers import PaymentSerializer

# Create your views here.

class PaymentList(APIView):

    def get(self, request):
        payments = Payment.objects.all()
        serializer = PaymentSerializer(payments, many=True)
        return Response(serializer.data)

class PaymentView(APIView):
    def get(self, request, id):
        payment = get_object_or_404(id=id)
        serializer = PaymentSerializer(payment)
        return Response(serializer.data)
