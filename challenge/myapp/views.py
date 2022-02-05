from django.shortcuts import render
from myapp.forms import PostMethod
from django.http import HttpResponseBadRequest
import json

# Home page
# Atualizar gráfico e tabela
def index(request):
    # GET
    if request.method == 'GET':
        return render(request, 'index.html')
    # POST
    else:
        form = PostMethod(request.POST)
        if form.is_valid():
            context = {
                'form': form
            }
            return render(request, 'index.html', context = context)
        # Inconsistência
        else:
            return HttpResponseBadRequest(json.dumps(form.errors), 
                                          content_type = 'application/json')