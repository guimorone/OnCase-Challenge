const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const app = express();

countId = 5;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));

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

app.route('/')
.get((req, res) => {
  res.status(200).send({
    message: 'Successful'
  });
})
.post((req, res) => {
  if(validateForm(req.body)) {
    countId++;
    const output = {
      id: countId,
      fname: req.body.firstName,
      lname: req.body.lastName,
      participation: req.body.participation
    };
    res.status(200).json({messages: output, error: null});
  } else {
    res.status(400).json({error: 'ERROR 400 (Bad Request): Not Acceptable, check your request!', request: req.body});
  }
});

let port = process.env.PORT;
if(port == null || port == '') {
  port = 3001;
}

app.listen(port, _ => console.log('Server is running!'));