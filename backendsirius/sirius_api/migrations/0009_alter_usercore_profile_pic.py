# Generated by Django 4.0.3 on 2022-04-26 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sirius_api', '0008_remove_instansi_id_alat_alat_instansi'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercore',
            name='profile_pic',
            field=models.URLField(blank=True, default='https://firebasestorage.googleapis.com/v0/b/sirius-images.appspot.com/o/profil_default_pic%2Fdefault.png?alt=media&token=56d074be-2ed8-4707-93bc-ae167b49c931', max_length=300),
        ),
    ]
