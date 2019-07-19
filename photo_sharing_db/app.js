// Set required node modules
var mysql = require('mysql');
var faker = require('faker');

// Connect to the instagram clone database
var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'vivian9698',
	database: 'photo_sharing_db'
});

// Source the mysql files
var q_database = 'source mysql/photo_sharing_db.sql';
var q_self_follow_trigger = 'source mysql/self_follow_trigger.sql';
var q_unfollow_trigger = 'source mysql/unfollow_tracker.sql';
var q_array = [q_database, q_self_follow_trigger, q_unfollow_trigger];

for (var i = 0; i < 3; i++) {
	connection.query(q_array[i], function(err, results){
	if (err) throw err;
	});
}

// Insert user data using faker
var insert_amount = 500;
var user_array = [];
for (var j = 0; j < insert_amount; j++) {
	user_array.push([faker.internet.email(), faker.date.past()]);
}

var q_insert = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 
connection.end();
	
