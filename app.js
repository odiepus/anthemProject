var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//Routes

//home
app.get('/', function(req, res){
  res.render('home', {
    title: "Anthem Javelin Stats Page"
  });
});

app.listen(8000, function(){
  console.log("asdf asdfng");
});
