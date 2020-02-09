const express = require('express'),
  app = express(),
  //cors = require('cors'),
  bodyParser = require('body-parser');
  const port = process.env.PORT || 5000;
  const cookieParser = require('cookie-parser');

  
  


const mysql = require('mysql');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'charity'
});
 


connection.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cors);
//app.use(bodyParser.raw());
app.use(cookieParser());


var routes = require('./routes/appRoutes'); 
routes(app); 