# Generated by Django 4.1.7 on 2023-05-04 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tips', '0005_alter_tip_image_url_alter_tip_link_alter_tip_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tip',
            name='category',
            field=models.IntegerField(blank=True, choices=[(1, 'Yoga/Stretching'), (2, 'Diet/Nutrition'), (3, 'Lifestyle/Other')], null=True),
        ),
    ]
