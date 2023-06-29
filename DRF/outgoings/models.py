from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class DayOfMonthField(models.IntegerField):
    def __init__(self, *args, **kwargs):
        kwargs['validators'] = [
            MinValueValidator(1),
            MaxValueValidator(31),
        ]
        super().__init__(*args, **kwargs)

class OutgoingsCategory(models.Model):

    class Meta:
        verbose_name_plural = "Categories"
    name = models.CharField(max_length=40)



class RecurringPayment(models.Model):
    owner = models.ForeignKey(User, on_delete=models.PROTECT)
    date = models.DateField()
    day_of_month = DayOfMonthField(default=1)
    total = models.DecimalField(max_digits=7, decimal_places=2, default=0)


class Payment(models.Model):
    """
    Payment model, documenting each single payment instance
    """

    owner = models.ForeignKey(User, on_delete=models.PROTECT)
    name = models.CharField(max_length=40)
    category = models.ForeignKey(OutgoingsCategory, on_delete=models.SET(1))
    total = models.DecimalField(max_digits=7, decimal_places=2)
    date = models.DateField()
    recurring = models.BooleanField()

    class Meta:
        ordering = ['date']

