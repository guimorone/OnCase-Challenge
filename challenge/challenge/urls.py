from django.contrib import admin
from django.urls import path, include

# Renderizar páginas
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls'))
]