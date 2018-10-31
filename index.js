//qe recoja lo que esta dentro e lo indicado: require

const express= require('express');
const engines= require('consolidate');
const handlebars= require ('handlebars');
const MongoClient= require('mongodb').MongoClient;
const bodyParser= require('body-parser');
const hbs = require('express-handlebars');


const dbName= 'ropa';


var app = express();
var db= null;

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

var port = 3000;

app.get('/producto', (req, res) => {
    res.render('producto');
});

app.listen(port);

const assert = require("assert");
const url = "mongodb://localhost:27017";
const mongoName = "productos";
const mongoClient = new MongoClient(url);

var products = null;

mongoClient.connect(function (err) {

    assert.equal(null, err);

    const db = mongoClient.db(mongoName);
    products = db.collection("Ropa");
});

mongoClient.connect(function(err){

    if(err){
        console.error(err);
        return;
    }
    db= mongoClient.db(dbName);

});



/*MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('dbName');


    app.listen(port, "server initialized in port: " + port);
});

*/

app.get("/", function(req, res){
    products.find({}).toArray(function(err, array){
        var context ={
            producto: array,
            
        };

        console.log(array);
        res.render("index", context);
       
    });
});

