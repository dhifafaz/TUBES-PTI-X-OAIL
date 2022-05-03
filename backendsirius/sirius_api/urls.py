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
    LogBookView,
    OrderLogList,
)

router  = DefaultRouter()
router.register('lihat_users', UserView, basename='lihat_users')
router.register('register_user', UserRegister, basename='register_user')
router.register('pinjam_alat', AlatsList, basename='pinjam_alat')
router.register('order_log', OrderLogView, basename='order_log')
router.register('login_user', UserLogin, basename='login_user')
router.register('logbook', LogBookView, basename='logbook')
# router.register('daftar_peminjaman', OrderLogList, basename='daftar_peminjaman')

urlpatterns = [
    # path('',Index),
    path('', include(router.urls)),
    path('katalog/', AlatsCounter.as_view()),
    path('daftar_peminjam/', OrderLogList.as_view()),
    # path('register-user/', UserRegister.as_view()),
    # path('pinjam-alat/', AlatsList.as_view()),
]