//qe recoja lo que esta dentro e lo indicado: require

const express = require('express');
const engines = require('consolidate');
const handlebars = require('handlebars');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');


const dbName = 'ropa';


var app = express();
var db = null;

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

var port = 3000;

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

mongoClient.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }
    db = mongoClient.db(dbName);
});



app.get('/producto/desc', (req, res) => {
    var nombre = req.query.name;
    products.find({}).toArray(function (err, array) {
        var product = array.find(function (element) {
            return element.nombre == nombre;
        });
        res.render('producto', product);
    });
});

app.get('/producto/addtocart', (req, res) => {
    var nombre = req.query.name;
    console.log('nombre tomado: ' + nombre);
    products.find({}).toArray(function (err, docs) {
        var product = docs.find(function (element) {
            return element.nombre == nombre;
        });
        //console.log(product);
        //db.collection('Cart').insert(product);
        res.json(product);
    });

});
app.get('/carro', (req, res) => {
    var nombre = req.query.name;
    products.find({}).toArray(function (err, array) {
        res.render('carro', array);
    });
});

/*
app.get('/producto/getproduct', (req, res) => {
    var nombre = req.query.name;
    products.find({}).toArray(function (err, docs) {
        var producto= docs.find(function(element){
            return element.nombre== nombre;
        });
        res.json(producto);
    });
});
*/

/*MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('dbName');


    app.listen(port, "server initialized in port: " + port);
});

*/

app.get('/', function (req, res) {
    var filterCategoria = req.query.categoria;

    if (filterCategoria !== null && filterCategoria !== '' && filterCategoria !== undefined) {
        products.find({
            categoria: filterCategoria,
        }).toArray(function (err, docs) {
            if (err) {
                console.log(err);
                return;
            }

            var context = {
                producto: docs,
            };
            console.log(filterCategoria);
            res.render("index", context);

        });
    } else {

        products.find({}).toArray(function (err, array) {
            var context = {
                producto: array,

            };
            console.log(array);
            console.log(filterCategoria);
            res.render("index", context);

        });
    }



});

function findProduct(array, categoria, value) {
    for (let index = 0; index < array.length; index++) {

        if (array[index][categoria] === value) {
            return array[index];
        }

    }

    return null;
}



app.listen(port);