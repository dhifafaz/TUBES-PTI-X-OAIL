from django.contrib import admin
from .models import UserProfile
from .models import UserCore
from .models import Alat
from .models import Instansi
from .models import OrderLog
from .models import LogBook
# from .models import PetugasProfile
# Register your models here.
from django import forms
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.utils.html import format_html
from django.contrib import admin
# from customauth.models import MyUser
class UserCreationForm(forms.ModelForm):
    """A form for creating new users. Includes all the required
    fields, plus a repeated password."""
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)
    class Meta:
        model = UserCore
        fields = ('email', 'nama')

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super(UserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

class UserChangeForm(forms.ModelForm):
    # password = ReadOnlyPasswordHashField(
    #     help_text="Raw passwords are not stored, so there is no way to see "
    #             "this user's password, but you can change the password "
    #             "using <a href=\"../password/\">this form</a>."
    # )
    password = ReadOnlyPasswordHashField(label=("Password"), help_text=(
        "Raw passwords are not stored, so there is no way to see "
        "this user's password, but you can change the password " 
        "using <a href=\"../password/\">this form</a>."))      


    class Meta:
        model = UserCore
        fields = ('email', 'password', 'nama', 'is_active', 'is_staff', 'role', 'profile_pic')

    def clean_password(self):
        return self.initial["password"]

@admin.display(description="profile_pic")
class UserAdmin(admin.ModelAdmin):
    # The forms to add and change user instances
    
    add_form = UserCreationForm
    change_form = UserChangeForm
    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('email', 'nama', 'role', 'profile_picture', 'is_active', 'is_superuser', 'is_staff', 'last_login')
    list_filter = ('is_staff','role')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('nama', 'profile_picture', 'date_joined')}),
        ('Permissions', {'fields': ('is_staff', 'role', 'is_active', 'groups', 'user_permissions', 'is_superuser', 'is_admin')}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'nama', 'password1', 'password2')}
        ),
    )
    search_fields = ('email', 'nama')
    filter_horizontal = ()
    readonly_fields = ('profile_picture', )
    list_per_page = 10
    def profile_picture(self, obj):
        return format_html("<a href='{url}'>{url}</a>", url=obj.profile_pic)

@admin.display(description="KTP_atau_KTM")
class UserDetail(admin.ModelAdmin):
    list_display = ('user', 'prodi_unit_institusi','alamat', 'KTP_atau_KTM', 'status_verifikasi')
    fieldsets = (
        ('User Detail', {'fields': ('user', 'prodi_unit_institusi','alamat', 'KTP_atau_KTM', 'status_verifikasi')}),
    )
    readonly_fields = ('KTP_atau_KTM', )
    search_fields = ('user', 'prodi_unit_institusi', 'alamat')
    list_filter = ('status_verifikasi', 'prodi_unit_institusi')
    filter_horizontal = ()
    list_per_page = 10
    def KTP_atau_KTM(self, obj):
        return format_html("<a href='{url}'>{url}</a>", url=obj.KTP_KTM)

class AlatDetail(admin.ModelAdmin):
    list_per_page = 10
    list_display = ('id_alat','nama_alat', 'lokasi_alat', 'kategori_alat', 'kondisi_alat', 'gambar_alat', 'instansi', 'bisa_dipinjam', 'level_peminjam')

admin.site.register(UserCore, UserAdmin)
admin.site.register(UserProfile, UserDetail)
admin.site.register(Alat, AlatDetail)
admin.site.register(Instansi)
admin.site.register(OrderLog)
admin.site.register(LogBook)