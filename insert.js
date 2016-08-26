/*var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql.stud.ntnu.no',
  user     : 'trulshn',
  password : 'makerbox',
  database : 'trulshn_makerbox'
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
});

var group  = {
  groupName: 'abc',
  age1: '12',
  age2: '34',
  age3: '56',
  timetask1:  '1',
  timetask2:  '2',
  timetask3:  '3',
  mf1:  'm',
  mf2:  'f',
  mf3:  'm',
  totaltime:  '6'
}

connection.query('SELECT * from groups', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();

var query = connection.query('INSERT into groups set ?', group, function(err, result) {
  if (err) {
    console.error(err)
    return;
  }
  console.log(result);

  console.log('The solution is: ', group);
});*/
