var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.use(function (req,resp,next) {
  if(req.headers['x-forworded-proto'] == 'https'){
    resp.redirect('http://'+req.hostname+req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(port,function () {
    console.log('Express server is up on port ' + port);
});
