import profile
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager


class UserCore(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    profile_pic = models.ImageField(upload_to='profile_pic/', blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    role = models.CharField(max_length=30)
    nama = models.CharField(max_length=100, blank=True)
    last_login = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nama']

    objects = CustomUserManager()
    def get_full_name(self):
        # The user is identified by their email address
        return self.nama

    def get_short_name(self):
        # The user is identified by their email address
        return self.nama

    def __str__(self):              # __unicode__ on Python 2
        return self.nama

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True


class UserProfile(models.Model):
    user = models.OneToOneField(UserCore, on_delete=models.CASCADE)
    prodi_unit_institusi = models.CharField(max_length=100)
    alamat = models.CharField(max_length=200)
    NRK_NIK_NIP_NIM = models.CharField(max_length=30)
    KTP_KTM = models.ImageField(upload_to='ktp_ktm/')
    status_verifikasi = models.CharField(max_length=50, default='belum diverifikasi')

    def __str__(self):
        return  self.user.name

