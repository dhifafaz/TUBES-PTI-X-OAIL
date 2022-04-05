# from django.shortcuts import render
# from django.http import HttpResponse


# class Index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")

from unittest import result
from collections import OrderedDict
from django.db.models import Count, Q

from .models import (
    Alat,
)
from .serializers import (
    AlatSerializer,
)
# from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import APIView
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.parsers import MultiPartParser, FormParser

# class AlatCounter(viewsets.ModelViewSet):
#     queryset =  Alat.objects.all()
#     serializer_class = AlatSerializer
#     http_method_names = ['get']

#     def list(self, request, *args, **kwargs):
#         queryset = self.filter_queryset(self.get_queryset())
#         # result_list = list(queryset.values('nama_alat').annotate(jumlah_alat=Count('nama_alat')))
#         result_list = list(queryset.values('nama_alat').annotate(jumlah_alat_tersedia=Count('status_alat',filter=Q(status_alat='tersedia'))).annotate(jumlah_alat_dipinjam=Count('status_alat',filter=Q(status_alat='dipinjam'))))
#         return Response(result_list)

#     def retrieve(self, request, pk=None):
#         queryset = Alat.objects.all()
#         alat = get_object_or_404(queryset, pk=pk)
#         serializer = AlatSerializer(alat)
#         return Response(serializer.data)
        

class AlatsCounter(APIView):
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    # parser_classes = (MultiPartParser, FormParser)
    # queryset =  Alat.objects.all()
    # serializer_class = AlatSerializer
    # http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        queryset = Alat.objects.filter(Q(status_alat='tersedia')).filter(Q(kondisi_alat='B') | Q(kondisi_alat='RS')).order_by('nama_alat', '-id_alat')
        serializer = AlatSerializer(queryset, many=True)
        alat_list = []
        nama_alats = []
        for item in serializer.data:
            for key in item:
                datas = {
                    'id_alat': item['id_alat'],
                    'nama_alat': item['nama_alat'],
                    'deskripsi': item['deskripsi'],
                    'gambar_alat': item['gambar_alat'],
                    'status_alat': item['status_alat'],
                    'kategori_alat': item['kategori_alat'],
                    'lokasi_alat': item['lokasi_alat'],
                    'kondisi_alat': item['kondisi_alat'],
                    'tanggal_masuk': item['tanggal_masuk'],
                    'keterangan': item['keterangan'],
                }
                if key == 'nama_alat':
                    if item[key] not in nama_alats:
                        nama_alats.append(item[key])
                        alat_list.append(datas)

        result_list = list(Alat.objects.values('nama_alat')
                        .annotate(jumlah_alat_tersedia=Count('status_alat',filter=Q(status_alat='tersedia')))
                        .annotate(jumlah_alat_dipinjam=Count('status_alat',filter=Q(status_alat='dipinjam')))
                        .annotate(alat_rusak_total=Count('kondisi_alat',filter=Q(kondisi_alat='RT')))
                        .annotate(jumlah_proses_peminjaman=Count('status_alat',filter=Q(status_alat='proses peminjaman'))))
        return Response({"data_alat" : alat_list, "ketersediaan_alat" : result_list}, status=status.HTTP_200_OK)
    
