// Set required modules
var express = require('express');
var mysql = require('mysql');
var body_parser = require('body-parser');
app = express();

// Allow embedded JS in html docs
app.set('view engine', 'ejs');
// Allow app to use body-parser to parse register data
app.use(body_parser.urlencoded({extended: true}));
// Select css from public folder and apply it to views folder
app.use(express.static(__dirname + '/public'));

// Connect to MYSQL email subscription database
var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'vivian9698',
	database: 'email_subscriber'
});

// Set notification for requests for home page
app.get('/', function(req, res){
	console.log('A home page request has been sent.');
	// SQL query to select a count of total email_addresses
	var q_count = 'SELECT COUNT(*) AS count FROM users';
	// Respond with subscriber count from users table
	connection.query(q_count, function(err, results){
		if (err) throw err;
		// Store and send user count to home page after a request
		var count = results[0].count;
		res.render('home', {count: count});
	});
});

// Take the email part of the post request and insert it into the users db
app.post('/register', function(req, res){
	// Use a insert query to add the registered email to the users table
	var registered_email = {email: req.body.email};
	q_insert = 'INSERT INTO users SET ?';
	connection.query(q_insert, registered_email, function(err,result) {
		console.log(err);
		console.log(result);
		res.redirect('/');
	});
});

// Connect server to default port
var port_id = 3000;
app.listen(port_id, function(){
	console.log('The server is running on port', port_id + '.');
});
