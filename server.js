//imported express, body-parser,express-handlebars, method-override
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Set Handlebars.
app.engine('handlebars', exphbs({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);
app.use("/add", routes);

// Start our server so that it can begin listening to client requests.
app.listen(port, function() {
console.log("Connected on port: " + port);
});
