from rest_framework import serializers
from .models import (
    UserCore,
    UserProfile,
    Alat,
    Instansi, 
    OrderLog,
    LogBook,
)
from drf_writable_nested.serializers import WritableNestedModelSerializer
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
# from drf_extra_fields.fields import Base64ImageField

        
class InstansiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = ('nama_instansi', 'alamat_instansi', 'kontak_instansi', 'logo_instansi')    
        
class AlatSerializer(serializers.ModelSerializer):
    # instansi 
    # instansi = InstansiSerializer(many=False)
    class Meta:
        model = Alat
        fields = ('id_alat', 'nama_alat', 'deskripsi', 'gambar_alat', 'status_alat', 'kategori_alat', 'lokasi_alat', 'kondisi_alat', 'tanggal_masuk', 'keterangan', 'bisa_dipinjam', 'level_peminjam')

class UserProfileSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        # KTP_KTM = Base64ImageField()
        # KTP_KTM = serializers.ImageField(max_length=None, use_url=True)
        fields = ('prodi_unit_institusi', 'alamat', 'NRK_NIK_NIP_NIM', 'KTP_KTM', 'status_verifikasi')
    
        
class UserCoreSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    profiles = UserProfileSerializer(many=False)
    # profile_pic = Base64ImageField()
    # profile_pic = serializers.ImageField(max_length=None, use_url=True)
    
    class Meta:
        model = UserCore
        fields = ('id', 'email', 'nama', 'password', 'profile_pic', 'role', 'profiles')   
        
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        profile_data = validated_data.pop('profiles')
        user_data = UserCore.objects.create(**validated_data)
        UserProfile.objects.create(user=user_data, **profile_data)
        return user_data
    
    
    def update(self, instance, validated_data, partial=True):
        
        if validated_data.get('profiles') is not None:
            profile_serializer = self.fields['profiles']
            profile_instance = instance.profiles
            profile_data = validated_data.pop('profiles')
            profile_serializer.update(profile_instance, profile_data)

        return super(UserCoreSerializer, self).update(instance, validated_data)
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
    
class OrderSerializer(serializers.ModelSerializer):
    nama_alat = serializers.ReadOnlyField(source='id_alat.nama_alat')
    gambar_alat = serializers.ImageField(source='id_alat.gambar_alat', read_only=True)
    class Meta:
        model = OrderLog
        fields = ('id', 'token_order', 'tanggal_peminjaman', 
                'tanggal_pengembalian', 'tanggal_update_data', 
                'status_order', 'alasan_meminjam', 'keterangan_ditolak',
                'keterangan_ditolak', 'id_alat','nama_alat', 'gambar_alat', 'id_user')
        
    # def update(self, instance, validated_data, partial=True):
    #     if validated_data.get('status_order') is not None:
    #         instance.status_order = validated_data.get('status_order')
    #         instance.save()
    #     return instance
    

class LogBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogBook
        fields = '__all__'