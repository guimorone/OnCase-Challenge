from django.shortcuts import render
from myapp.forms import PostMethod
from django.http import HttpResponseBadRequest, HttpResponse
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
                'fname': form.data['firstName'],
                'lname': form.data['lastName'],
                'participation': form.data['participation'],
            }
            return HttpResponse(json.dumps(context))
        # Inconsistência
        else:
            return HttpResponseBadRequest(json.dumps(form.errors), 
                                          content_type = 'application/json')