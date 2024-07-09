# Task 3
from django.db.models import Q
from django.utils import timezone
from .task1and2 import *

start_date = timezone.datetime(2023, 1, 1)
end_date = timezone.datetime(2023, 12, 31, 23, 59, 59)

posts = BlogPost.objects.filter(
    Q(publication_date__range=(start_date, end_date)) &
    Q(title__startswith="Django")
)

# Task 4
posts_with_authors = BlogPost.objects.select_related('author').all()

# Task 5
students_with_courses = Student.objects.prefetch_related('courses').all()
