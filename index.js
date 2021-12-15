//index.js

var express = require("express"); // express module (in node_modules folder) -> express variable
var app = express(); // execute express -> initialize app object

//DB setting
var mongoose = require('mongoose'); 
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection; // mongoose db object -> db variable 
db.once('open', function() {
    console.log("DB connected");
}); // db successfully connected
db.on("error", function(err) {
    console.log("DB error: ", err);
});

//Other setting
app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"));
app.get('/', function(req, res) {
    res.send("Hello World"); 
});


var port = 3000;
app.listen(port, function() {
    console.log("Server on! http://localhost:"+port);
});



