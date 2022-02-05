from django.shortcuts import render

# Home page
def index(request):
    return render(request, 'index.html')

# Atualizar gráfico e tabela
def addInfo(request):
    text = request.POST['text']