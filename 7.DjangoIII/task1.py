# Step 1

from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class BookView(APIView):
    def get(self, request):
        data = {
            'message': 'GET request received',
        }
        return Response(data, status=status.HTTP_200_OK)
    
    def post(self, request):
        if not request.data:
            return Response({'error': 'No data provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        data = request.data
        response_data = {
            'message': 'POST request received',
            'data': data,
        }
        return Response(response_data, status=status.HTTP_200_OK)


# Step 2
from rest_framework.parsers import JSONParser

class BookView(APIView):
    parser_classes = [JSONParser]

    def post(self, request):
        if not request.data:
            return Response({'error': 'No data provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        data = request.data
        response_data = {
            'message': 'POST request received',
            'data': data,
        }
        return Response(response_data, status=status.HTTP_200_OK)
