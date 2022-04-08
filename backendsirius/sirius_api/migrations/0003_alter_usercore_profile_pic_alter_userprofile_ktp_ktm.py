# Generated by Django 4.0.3 on 2022-04-06 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sirius_api', '0002_alter_userprofile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercore',
            name='profile_pic',
            field=models.ImageField(default='default.png', upload_to='profile_pic/'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='KTP_KTM',
            field=models.ImageField(blank=True, upload_to='ktp_ktm/'),
        ),
    ]