var express = require('express');
var app = express();

var Controller=function(req, res){
  console.log("Invoking  rest api for solution list");
  var employee = [
  {id:1,name:"shruti",salary:10000000},
  {id:2,name:"sp",salary:1000000}
  ];
  res.send(employee);
};

app.get ('/employee',Controller);
var server = app.listen(8329, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8329", host, port)
})