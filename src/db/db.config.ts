var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '132465'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err: any, rows: any, fields: any) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

if(connection.end()) {
    console.log('Terminating');
    
};