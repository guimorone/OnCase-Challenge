from django.shortcuts import render

# Home page
def index(request):
    return render(request, 'index.html')