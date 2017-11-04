var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port  = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function(req, res){
  res.status(200).send("Hello World!");
});

app.listen(port, function(){
  console.log('Listening to port ' + port);
});

app.post('/hello', function(req, res, next){
  var username = req.body.user_name;
  var botPayload = {
    text : 'Hello' + username + 'I am Hell-O bot!'
  };
  if(username != 'slackbot'){
    return res.status(200).json(botPayload);
  }else{
    return res.status(200).end();
  }
});
