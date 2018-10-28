//This project was created in accordance with the tutorial created by the YT teacher The Net Ninja (https://github.com/iamshaunjp)

var express = require('express');
var app = express();
var todoController = require('./controllers/todoController');


app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
todoController(app);

app.listen(3000);
