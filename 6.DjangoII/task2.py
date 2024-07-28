# Custom Signal

# Signal.py

from django.dispatch import Signal

my_custom_signal = Signal(providing_args=["instance", "created"])

# views.py

from django.shortcuts import render
from .signals import my_custom_signal
from .models import MyModel

def my_view(request):
    instance = MyModel.objects.create(name='example')
    my_custom_signal.send(sender=MyModel, instance=instance, created=True)
    return render(request, 'template.html')

# receivers.py

from django.dispatch import receiver
from .signals import my_custom_signal

@receiver(my_custom_signal)
def my_signal_receiver(sender, instance, created, **kwargs):
    if created:
        print(f'New instance created: {instance}')

# apps.py

from django.apps import AppConfig

class MyAppConfig(AppConfig):
    name = 'myapp'

    def ready(self):
        from . import receivers

