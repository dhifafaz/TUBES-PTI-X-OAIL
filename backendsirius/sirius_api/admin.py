from django.contrib import admin
from .models import UserProfile
from .models import UserCore
# from .models import PetugasProfile
# Register your models here.
from django import forms
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField

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
    password = ReadOnlyPasswordHashField(
        help_text="Raw passwords are not stored, so there is no way to see "
                "this user's password, but you can change the password "
                "using <a href=\"../password/\">this form</a>."
    )

    class Meta:
        model = UserCore
        fields = ('email', 'password', 'nama', 'is_active', 'is_staff', 'role', 'profile_pic')

    def clean_password(self):
        return self.initial["password"]

class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('email', 'nama', 'role', 'profile_pic', 'is_active', 'is_superuser', 'is_staff', 'last_login')
    list_filter = ('is_staff',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('nama', 'profile_pic',)}),
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
    ordering = ('email', 'nama', 'is_staff', 'role')
    filter_horizontal = ()

class UserDetail(admin.ModelAdmin):
    inlines = ()
    list_display = ('user', 'prodi_unit_institusi','alamat', 'KTP_KTM', 'status_verifikasi')


admin.site.register(UserCore, UserAdmin)
admin.site.register(UserProfile, UserDetail)
