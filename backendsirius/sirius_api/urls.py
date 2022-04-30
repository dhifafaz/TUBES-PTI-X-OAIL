from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from .views import Index
from .views import (
    AlatsCounter,
    UserView,
    AlatsList,
    OrderLogView,
    UserRegister,
    UserLogin,
    LogBookView
)

router  = DefaultRouter()
router.register('lihat_users', UserView, basename='lihat_users')
router.register('register_user', UserRegister, basename='register_user')
router.register('pinjam_alat', AlatsList, basename='pinjam_alat')
router.register('order_log', OrderLogView, basename='order_log')
router.register('login_user', UserLogin, basename='login_user')
router.register('logbook', LogBookView, basename='logbook')

urlpatterns = [
    # path('',Index),
    path('', include(router.urls)),
    path('katalog/', AlatsCounter.as_view()),
    # path('register-user/', UserRegister.as_view()),
    # path('pinjam-alat/', AlatsList.as_view()),
]