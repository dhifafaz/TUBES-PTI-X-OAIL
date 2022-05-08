from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


from .managers import CustomUserManager


class UserCore(AbstractBaseUser, PermissionsMixin):
    ROLE = (
        ('admin', 'Admin'),
        ('petugas', 'Petugas'),
        ('mahasiswa', 'Mahasiswa'),
        ('dosen', 'Dosen'),
        ('masyarakat', 'Masyarakat'),
    )
    email = models.EmailField(_('email address'), unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    # profile_pic = models.ImageField(upload_to='profile_pic/', default='default.png')
    profile_pic = models.URLField(max_length=300, blank=True, default='https://firebasestorage.googleapis.com/v0/b/sirius-images.appspot.com/o/profil_default_pic%2Fdefault.png?alt=media&token=56d074be-2ed8-4707-93bc-ae167b49c931')
    updated_at = models.DateTimeField(auto_now=True)
    role = models.CharField(max_length=30, choices=ROLE)
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
    VERIFIED = (
        ('1', 'Sudah Terverifikasi'),
        ('0', 'Belum Terverifikasi'),
    )
    user = models.OneToOneField(UserCore,related_name='profiles', on_delete=models.CASCADE)
    prodi_unit_institusi = models.CharField(max_length=100)
    alamat = models.CharField(max_length=200)
    NRK_NIK_NIP_NIM = models.CharField(max_length=30)
    # KTP_KTM = models.ImageField(upload_to='ktp_ktm/', blank=True)
    KTP_KTM = models.URLField(max_length=300, blank=True)
    status_verifikasi = models.CharField(max_length=50, default='0', choices=VERIFIED)

    def __str__(self):
        return  self.user.nama


class Instansi(models.Model):
    nama_instansi = models.CharField(max_length=200)
    alamat_instansi = models.CharField(max_length=200)
    kontak_instansi = models.CharField(max_length=200)
    logo_instansi = models.ImageField(upload_to='logo_instansi/')

    def __str__(self):
        return self.nama_instansi


class Alat(models.Model):
    STATUS = (
        ('tersedia', 'Tersedia'),
        ('dipinjam', 'Dipinjam'),
    )
    CONDITION = (
        ('B', 'Baik'),
        ('RS', 'Rusak Sebagian'),
        ('RT', 'Rusak Total'),
    )
    CATEGORY = (
        ('auxiliary instrument', 'Auxiliary Instrument'),
        ('instrumen utama', 'Instrumen Utama'),
        ('obat-obatan', 'Obat-Obatan'),
        ('atk', 'ATK'),
        ('perawatan', 'Perawatan'),
        ('lain-lain', 'Lain-Lain'),
    )
    BORROW =(
        ('1', 'Bisa'),
        (0, 'Tidak Bisa'),
    )
    LEVEL = (
        ('1','Umum - Mahasiswa - Dosen'),
        ('2','Mahasiswa - Dosen'),
        ('3','Dosen'),
    )
    id_alat = models.CharField(max_length=30, primary_key=True)
    nama_alat = models.CharField(max_length=200)
    deskripsi = models.TextField(max_length=1000)
    gambar_alat = models.ImageField(upload_to='gambar_alat/')
    status_alat = models.CharField(max_length=50, default='tersedia')
    kategori_alat = models.CharField(max_length=80, choices=CATEGORY)
    lokasi_alat = models.CharField(max_length=200)
    kondisi_alat = models.CharField(max_length=200, choices=CONDITION)
    tanggal_masuk = models.DateTimeField()
    keterangan = models.TextField(max_length=500)
    instansi = models.ForeignKey(Instansi, on_delete=models.CASCADE, blank=True, null=True)
    bisa_dipinjam = models.CharField(max_length=2, blank=True, default=0, choices=BORROW)
    level_peminjam = models.CharField(max_length=2, blank=True, default=1, choices=LEVEL)
    
    def __str__(self):
        return self.id_alat


class OrderLog(models.Model):
    token_order = models.CharField(max_length=100, blank=True)
    tanggal_peminjaman = models.DateTimeField(blank=True)
    tanggal_pengembalian = models.DateTimeField(blank=True)
    tanggal_update_data = models.DateTimeField(auto_now=True, blank=True)
    status_order = models.CharField(max_length=50, default='peminjaman')
    alasan_meminjam = models.TextField(max_length=1000)
    keterangan_ditolak = models.TextField(max_length=1000, blank=True)
    catatan_kelengkapan_alat = models.TextField(max_length=2000, blank=True)
    id_alat = models.ForeignKey(Alat, on_delete=models.RESTRICT)
    id_user = models.ForeignKey(UserCore, on_delete=models.RESTRICT)
    
    def __str__(self):
        return self.id_user.nama


class LogBook(models.Model):
    catatan = models.CharField(max_length=2000)
    # foto_catatan_penggunaan = models.ImageField(upload_to='foto_catatan_penggunaan/')
    foto_catatan_penggunaan = models.URLField(max_length=300, blank=True)
    tanggal_pembuatan = models.DateTimeField(auto_now_add=True)
    tanggal_update = models.DateTimeField(auto_now=True)
    id_order = models.ForeignKey(OrderLog, on_delete=models.CASCADE)

    def __str__(self):
        return self.catatan
    