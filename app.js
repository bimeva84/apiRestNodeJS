express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
const request = require("request");

var router = express.Router();

router.get('/saludo', function(req, res) {

   request.post('http://localhost:8084/cyxteraweb/clients/', {
    json: {
        sharedKey: 'Jgutierrez',
        businessId: 'Juan Gutierrez',
        email: 'jgutierrez@netsecure.ci',
        phone: '3106996767'
    }
  }, (error, resp, body) => {
    if (error) {
      console.error(error)
      return
    }else{
        res.send(body.respuesta); 
    }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)
  })

});

app.use(router);

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});


/**
 * {
"sharedKey": 'Jgutierrez',
"businessId": 'Juan Gutierrez',
"email": 'jgutierrez@netsecure.ci',
"phone": '3106996767'
}   
 */

var post_options = {
    hostname: 'localhost',
    port: 8084,
    path: '/cyxteraweb/clients',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
  };
  
  