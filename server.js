var express = require('express');
var app = express()
var port = 3000


var middleware = require('./middleware')

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);


app.get('/about',middleware.requireAuthentication,function(req,res){
  res.send("About me!");
});

app.use(express.static(__dirname + '/public'))
console.log(__dirname)
app.listen(port,function(){
  console.log("Express server started at port "+3000)
});
