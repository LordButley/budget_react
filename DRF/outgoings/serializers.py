from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):

    owner = serializers.ReadOnlyField

    class Meta:
        model = Payment
        fields = "__all__"
        read_only_fields = "__all__"