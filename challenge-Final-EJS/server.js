const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const informations = [{fname: 'Carlos', lname: 'Moura', participation: '5%'}, 
                    {fname: 'Fernanda', lname: 'Oliveira', participation: '15%'}, 
                    {fname: 'Hugo', lname: 'Silva', participation: '20%'}, 
                    {fname: 'Eliza', lname: 'Souza', participation: '20%'}, 
                    {fname: 'Anderson', lname: 'Santos', participation: '40%'}
];

// Ver se tem numero nos nomes
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
    // ordenar por participação (crescente)
    informations.sort((fst, snd) => {
        return parseFloat(fst.participation) - parseFloat(snd.participation);
    });
    res.render('index', {
        informations: informations
    });
})
.post((req, res) => {
    if(validateForm(req.body)) {
        const value = {
            fname: req.body.firstName, 
            lname: req.body.lastName, 
            participation: req.body.participation
        };
        informations.push(value);
        res.redirect('/');
    } else res.status(400).json({error: 'ERROR 400 (Bad Request): Not Acceptable, check your request!', request: req.body});
});

let port = process.env.PORT;
if(port == null || port == '') {
  port = 3000;
}

app.listen(port, _ => console.log('Server is running!'));