/* Empty JS object to act as endpoint for all routes */
var path = require('path');
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
/* Dependencies */
const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Cors for cross origin allowance


/* Initializing the main project folder */
const data = {"name" : 'taha'};
const port = 3000;

// TODO-Spin up the server

app.get('/', function(req, res){
    console.log('hello')
    res.send(data);
});












const server = app.listen(port, listening);

function listening() {
    console.log('running server');
    console.log(`runing on localhost: ${port}`);
}



