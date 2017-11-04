var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port  = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function(req, res){
  res.status(200).send("Hello World! How's going?");
});

app.listen(port, function(){
  console.log('Listening to port ' + port);
});

app.post('/hello', function(req, res, next){
  var username = req.body.user_name;
  var botPayload = {
    text : 'Hello, ' + toCamelCase(username.split('.')[0]) + '! I am Hell-O bot!'
  };
  if(username != 'slackbot'){
    return res.status(200).json(botPayload);
  }else{
    return res.status(200).end();
  }
});

String.prototype.toCamelCase = function(str) {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}