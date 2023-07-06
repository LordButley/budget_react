from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):

    category = serializers.ReadOnlyField(source="category.name")
    class Meta:

        model = Payment
        fields = "__all__"
        read_only_fields = ["name", "total", "date", "recurring", "owner", "category"]

    # def get_fields(self):
    #     fields = super().get_fields()
    #     for field in fields.values():
    #         field.read_only = True
    #     print(fields)
    #     return fields