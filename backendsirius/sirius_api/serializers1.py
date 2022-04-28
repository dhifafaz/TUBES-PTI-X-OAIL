
from re import A
from venv import create
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

class AlatSerializer(serializers.ModelSerializer):
    # instansi 
    class Meta:
        model = Alat
        fields = ('id_alat', 'nama_alat', 'deskripsi', 'gambar_alat', 'status_alat', 'kategori_alat', 'lokasi_alat', 'kondisi_alat', 'tanggal_masuk', 'keterangan')
        
        
class InstansiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = ('nama_instansi', 'alamat_instansi', 'kontak_instansi', 'logo_instansi')
        
class UserProfileSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('prodi_unit_institusi', 'alamat', 'NRK_NIK_NIP_NIM', 'KTP_KTM', 'status_verifikasi')
    
        
class UserCoreSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    profiles = UserProfileSerializer(many=False)
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
    class Meta:
        model = OrderLog
        fields = '__all__'
        
    # def update(self, instance, validated_data, partial=True):
    #     if validated_data.get('status_order') is not None:
    #         instance.status_order = validated_data.get('status_order')
    #         instance.save()
    #     return instance