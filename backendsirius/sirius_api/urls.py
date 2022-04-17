from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from .views import Index
from .views import (
    AlatsCounter,
    UserView,
    AlatsList,
)

router  = DefaultRouter()
router.register('user', UserView, basename='user')
router.register('pinjam_alat', AlatsList, basename='pinjam_alat')

urlpatterns = [
    # path('',Index),
    path('', include(router.urls)),
    path('katalog/', AlatsCounter.as_view()),
    # path('pinjam-alat/', AlatsList.as_view()),
]