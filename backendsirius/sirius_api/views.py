# from django.shortcuts import render
# from django.http import HttpResponse


# class Index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")

from unittest import result
from collections import OrderedDict
from django.db.models import Count, Q

from .models import (
    Alat,
    UserCore,
    UserProfile,
    OrderLog,
    LogBook,
)
from .serializers import (
    AlatSerializer,
    UserCoreSerializer,
    UserProfileSerializer,
    OrderSerializer,
    UserLoginSerializer,
    LogBookSerializer,
    StatusAlatUpdateSerializer,
)
from rest_framework import viewsets, permissions, generics
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import APIView
from knox.models import AuthToken
# import pyrebase
import os
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.parsers import MultiPartParser, FormParser

# config = {
#     "apiKey": "AIzaSyCSedZNHkBrY5UBUFUhPQUyfLfT4TlDlcQ",
#     "authDomain": "http://sirius-images.firebaseapp.com/",
#     "projectId": "sirius-images",
#     "storageBucket": "http://sirius-images.appspot.com/",
#     "messagingSenderId": "710016230428",
#     "appId": "1:710016230428:web:fbc3840c9cd7a86baaabd9",
#     "measurementId": "G-SJZPNGSQ0B",
#     "databaseURL": ""
# }

# firebase = pyrebase.initialize_app(config)
# storage = firebase.storage()

class UserRegister(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'patch', 'head', 'options']
    queryset = UserCore.objects.all()
    serializer_class = UserCoreSerializer
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserCoreSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
        
        

class UserLogin(viewsets.ModelViewSet):
    http_method_names = ['post', 'head', 'options']
    serializer_class = UserLoginSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserCoreSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class UserView(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    http_method_names = ['get', 'put', 'patch', 'head', 'options']
    queryset = UserCore.objects.all()
    serializer_class = UserCoreSerializer

class AlatsList(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'head', 'options']
    queryset = Alat.objects.all()
    serializer_class = AlatSerializer
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    def list(self, request, *args, **kwargs):
        queryset = Alat.objects.filter(Q(status_alat='tersedia')).filter(Q(kondisi_alat='B') | Q(kondisi_alat='RS')).order_by('nama_alat', 'id_alat')
        serializer = AlatSerializer(queryset, many=True)
        return Response(serializer.data)
    
    
class AlatsCounter(APIView):
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    # parser_classes = (MultiPartParser, FormParser)
    # queryset =  Alat.objects.all()
    # serializer_class = AlatSerializer
    # http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        queryset = Alat.objects.filter(Q(status_alat='tersedia')).filter(Q(bisa_dipinjam='1')).filter(Q(kondisi_alat='B') | Q(kondisi_alat='RS')).order_by('nama_alat', 'id_alat')
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
                    'bisa_dipinjam': item['bisa_dipinjam'],
                    'level_peminjam': item['level_peminjam'],
                }
                if key == 'nama_alat':
                    if item[key] not in nama_alats:
                        nama_alats.append(item[key])
                        alat_list.append(datas)

        result_list = list(Alat.objects.values('nama_alat')
                        .annotate(jumlah_alat_tersedia=Count('status_alat',filter=Q(status_alat='tersedia')))
                        .annotate(jumlah_alat_dipinjam=Count('status_alat',filter=Q(status_alat='dipinjam')))
                        .annotate(alat_rusak_total=Count('kondisi_alat',filter=Q(kondisi_alat='RT')))
                        .annotate(jumlah_proses_peminjaman=Count('status_alat',filter=Q(status_alat='proses'))))
        return Response({"data_alat" : alat_list, "ketersediaan_alat" : result_list}, status=status.HTTP_200_OK)
    

class OrderLogView(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    http_method_names = ['get', 'post', 'patch', 'head', 'options']
    queryset = OrderLog.objects.all().order_by('-tanggal_peminjaman')
    serializer_class = OrderSerializer 
    
    # def list(self, request, *args, **kwargs):
    #     serializer = OrderSerializer(queryset, many=True)
    #     return Response(serializer.data)
    def get_queryset(self):
        #bentuk url yang perlu di upload kira kira beginin
        #http://127.0.0.1:8000/sirius_api/order_log/?token=12379416812387-53&user=1
        token_order = self.request.query_params.get('token')
        user_id = self.request.query_params.get('user')
        #http://127.0.0.1:8000/sirius_api/order_log/?token=12379416812387-53&id_alat=112093103
        id_alat = self.request.query_params.get('id_alat')
        if token_order is not None and user_id is not None:    
            queryset = OrderLog.objects.filter(Q(token_order=token_order)).filter(Q(id_user=user_id))
        elif token_order is not None and id_alat is not None:
            queryset = OrderLog.objects.filter(Q(token_order=token_order)).filter(Q(id_alat=id_alat))
        else:
            queryset = OrderLog.objects.all().order_by('-tanggal_peminjaman')
        return queryset

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)
    
    
class OrderLogList(APIView):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    
    def get(self, request, *args, **kwargs):
        queryset = OrderLog.objects.exclude(status_order='tolak').exclude(status_order='sudah-dikembalikan').order_by('-tanggal_peminjaman')
        serializer = OrderSerializer(queryset, many=True)
        peminjam_list = []
        token_order_list = []
        for item in serializer.data:
            for key in item:
                datas = {
                    'token_order': item['token_order'],
                    'status_order': item['status_order'],
                    'id_alat': item['id_alat'],
                    'id_user': item['id_user'],
                    'role': item['role'],
                    'nama_user': item['nama_user'],
                    'profile_pic': item['profile_pic'],
                    'tanggal_peminjaman': item['tanggal_peminjaman'],
                    'tanggal_pengembalian': item['tanggal_pengembalian'],
                    'alasan_meminjam': item['alasan_meminjam'],
                }
                if key == 'token_order':
                    if item[key] not in token_order_list:
                        token_order_list.append(item[key])
                        peminjam_list.append(datas)

                
        # token_counter = []        
        counter = list(OrderLog.objects.values('token_order')
                    .annotate(terhitung=Count('token_order'))
                    .annotate(ditolak=Count('token_order',filter=Q(status_order='tolak')))
                    .annotate(diterima=Count('token_order',filter=Q(status_order='terima')))
                    )
        # token_counter.append({
        #     'token_order': token,
        #     'jumlah_order': counter[0]['jumlah_order'],
        # })
                        
        return Response({"data_peminjam" : peminjam_list, "jumlah_alat_dipinjam": counter}, status=status.HTTP_200_OK)
    
# class OrderLogDetail(APIView):
    
#     def get
    
class LogBookView(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'patch', 'head', 'options']
    queryset = LogBook.objects.all()
    serializer_class = LogBookSerializer
    
    
class AlatStatusUpdate(viewsets.ModelViewSet):
    http_method_names = ['get', 'patch', 'head', 'options']
    queryset = Alat.objects.all()
    serializer_class = StatusAlatUpdateSerializer
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]


class OrderLogHistory(APIView):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    
    def get(self, request, *args, **kwargs):
        queryset = OrderLog.objects.filter(Q(status_order='sudah-dikembalikan')).order_by('-tanggal_pengembalian')
        serializer = OrderSerializer(queryset, many=True)
        peminjam_list = []
        token_order_list = []
        for item in serializer.data:
            for key in item:
                datas = {
                    'token_order': item['token_order'],
                    'status_order': item['status_order'],
                    'id_alat': item['id_alat'],
                    'id_user': item['id_user'],
                    'role': item['role'],
                    'nama_user': item['nama_user'],
                    'email_user': item['email'],
                    'alamat_user': item['alamat'],
                    'prodi_unit_institusi': item['prodi_unit_institusi'],
                    'NRK_NIK_NIP_NIM': item['NRK_NIK_NIP_NIM'],
                    'profile_pic': item['profile_pic'],
                    'tanggal_peminjaman': item['tanggal_peminjaman'],
                    'tanggal_pengembalian': item['tanggal_pengembalian'],
                    'alasan_meminjam': item['alasan_meminjam'],
                }
                if key == 'token_order':
                    if item[key] not in token_order_list:
                        token_order_list.append(item[key])
                        peminjam_list.append(datas)

                
        # token_counter = []        
        counter = list(OrderLog.objects.values('token_order')
                    .annotate(terhitung=Count('token_order'))
                    .annotate(ditolak=Count('token_order',filter=Q(status_order='tolak')))
                    .annotate(sudah_dikembalikan=Count('token_order',filter=Q(status_order='sudah-dikembalikan')))
                    .annotate(diterima=Count('token_order',filter=Q(status_order='terima')))
                    )
        # token_counter.append({
        #     'token_order': token,
        #     'jumlah_order': counter[0]['jumlah_order'],
        # })
                        
        return Response({"data_peminjam" : peminjam_list, "jumlah_alat_dipinjam": counter}, status=status.HTTP_200_OK)
        # return Response(serializer.data, status=status.HTTP_200_OK)
    