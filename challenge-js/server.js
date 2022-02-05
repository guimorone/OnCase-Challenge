const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Server is running!</h1>');
});

let port = process.env.PORT;
if(port == null || port == '') {
  port = 3001;
}

app.listen(port, _ => console.log('Server is running!'))