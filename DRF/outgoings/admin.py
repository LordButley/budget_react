from django.contrib import admin

from .models import OutgoingsCategory, Payment, RecurringPayment

# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
    )

    ordering = ["id"]


admin.site.register(OutgoingsCategory, CategoryAdmin)
admin.site.register(RecurringPayment)
admin.site.register(Payment)