from rest_framework import serializers
from .models import (
    UserCore,
    UserProfile,
    Alat,
    Instansi, 
    OrderLog,
    LogBook,
)

class AlatSerializer(serializers.ModelSerializer):
    # count_alat = serializers.SerializerMethodField(read_only=True)

    # def get_count_alat(self, obj):
    #     return obj.nama_alat.all().count()

    class Meta:
        model = Alat
        fields = ('id_alat', 'nama_alat', 'deskripsi', 'gambar_alat', 'status_alat', 'kategori_alat', 'lokasi_alat', 'kondisi_alat', 'tanggal_masuk', 'keterangan')
        
        
# class 