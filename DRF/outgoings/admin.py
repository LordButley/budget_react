from django.contrib import admin

from .models import OutgoingsCategory, Payment, RecurringPayment

# Register your models here.

admin.site.register(OutgoingsCategory)
admin.site.register(RecurringPayment)
admin.site.register(Payment)