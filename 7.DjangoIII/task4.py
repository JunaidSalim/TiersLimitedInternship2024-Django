from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    # Other URL patterns
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]


from rest_framework.permissions import BasePermission

class IsAuthenticatedToCreate(BasePermission):
    def has_permission(self, request, view):
        if request.method == 'POST':
            return request.user and request.user.is_authenticated
        return True

from rest_framework.permissions import IsAuthenticated

class BookListCreateView(ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticatedToCreate]
