from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from .views import Index
from .views import (
    AlatsCounter,
)

# router  = DefaultRouter()
# router.register('count_alat', AlatCounter, basename='count_alat')

urlpatterns = [
    # path('',Index),
    # path('', include(router.urls)),
    path('katalog/', AlatsCounter.as_view()),
]