//qe recoja lo que esta dentro e lo indicado: require

const express= require('express');
const engines= require('consolidate');
const handlebars= require ('handlebars');
const MongoClient= require('mongodb').MongoClient;

var app = express();
var db;

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

var port = 3000;

/*MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('dbName');


    app.listen(port, "server initialized in port: " + port);
});

*/

app.get('/', (req, res) => {

    //var dbColectionName = db.collection('dbColectionName')
     //   .find();

    //dbColectionName.toArray((err, result) => {

        res.render('index', {
            //array: result,

        //});
    });

});

app.listen(port );