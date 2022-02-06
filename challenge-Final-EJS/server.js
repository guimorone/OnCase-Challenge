// Includes
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

// Uso do EJS, bodyparser (Parse incoming request bodies) e visualização da pasta estática pelo express ('public')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Informações iniciais
const informations = [{fname: 'Carlos', lname: 'Moura', participation: 5}, 
                    {fname: 'Fernanda', lname: 'Oliveira', participation: 15}, 
                    {fname: 'Hugo', lname: 'Silva', participation: 20}, 
                    {fname: 'Eliza', lname: 'Souza', participation: 20}, 
                    {fname: 'Anderson', lname: 'Santos', participation: 40}
];

// Ver se tem número nos nomes
function isNumeric(str) {
    return /\d/.test(str);
}

function validateForm(form) {
    if(isNumeric(form.firstName) || isNumeric(form.lastName)) {
        return false;
    }
    if(form.firstName.length > 30 || form.lastName.length > 50) {
        return false;
    }

    return true;
}

app.route('/')
.get((req, res) => {
    // ordenar por participação (crescente)
    informations.sort((fst, snd) => {
        return fst.participation - snd.participation;
    });
    res.render('index', {
        informations: informations
    });
})
.post((req, res) => {
    // Novo dado adicionado
    if(validateForm(req.body)) {
        const value = {
            fname: req.body.firstName, 
            lname: req.body.lastName, 
            participation: Math.abs(req.body.participation) // por conta do -0
        };
        // Atualizar as informações
        informations.push(value);
        res.redirect('/');
    } else res.status(400).json({error: 'ERROR 400 (Bad Request): Not Acceptable, check your request!', request: req.body});
});

// Rodar o server
let port = process.env.PORT;
if(port == null || port == '') {
  port = 3000;
}

app.listen(port, _ => console.log('Server is running!'));