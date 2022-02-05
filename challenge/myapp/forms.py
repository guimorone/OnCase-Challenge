from django import forms

class PostMethod(forms.Form):
    firstName = forms.CharField(max_length = 30)
    lastName = forms.CharField(max_length = 50)
    participation = forms.CharField(max_length = 4)