var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port  = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function(req, res){
  res.status(200).send("Hello world! How's going?");
});

app.listen(port, function(){
  console.log('Listening to port ' + port);
});

app.post('/hello', function(req, res, next){
  var username = req.body.user_name;
  var botPayload = {
    text : 'Hello, ' + username.split('.')[0] + '! My name is \'Hell-O\'! I am an extremely intelligent bot. I can greet you, for starters!!.'
  };
  if(username != 'slackbot'){
    return res.status(200).json(botPayload);
  }else{
    return res.status(200).end();
  }
});
