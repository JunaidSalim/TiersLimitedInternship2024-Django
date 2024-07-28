# Paginator

# views.py

from django.views.generic import ListView
from django.core.paginator import Paginator
from .models import MyModel

class MyModelListView(ListView):
    model = MyModel
    template_name = 'myapp/mymodel_list.html'
    context_object_name = 'mymodels'
    paginate_by = 10  # 10 items per page

    def get_queryset(self):
        return MyModel.objects.all()
    