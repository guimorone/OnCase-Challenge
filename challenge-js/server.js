const express = require('express');
const bodyParser = require('body-parser');

const app = express();

countId = 5;

// body-parser => using in post methods
app.use(bodyParser.urlencoded({extended: true}));

// checar se tem numero na string do nome e sobrenome
function isNumeric(str) {
  return /\d/.test(str);
}

function validateForm(form) {
  if(isNumeric(form.firstName) || isNumeric(form.lastName)) {
    return false;
  }
  if(form.firstName.length > 30 || form.lastName.length > 50 || form.participation.length > 4) {
    return false;
  }

  return true;
}

app.get('/', (req, res) => {
  res.send('Sucesso');
});

app.post('/', (req, res) => {
  if(validateForm(req.body)) {
    countId++;
    const output = {
      id: countId,
      fname: req.body.firstName,
      lname: req.body.lastName,
      participation: req.body.participation
    };
    console.log(output);
    res.redirect('/');
  } else {
    res.status(400).json({error: 'ERROR 400 (Bad Request): Not Acceptable, check your request!', request: req.body});
  }
});

let port = process.env.PORT;
if(port == null || port == '') {
  port = 3001;
}

app.listen(port, _ => console.log('Server is running!'));