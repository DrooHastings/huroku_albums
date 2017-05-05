//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path =require ('path');
var mongoose = require('mongoose');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/albums');
//define albumSchema
  var albumSchema = mongoose.Schema({
      artist : String,
      imageUrl : String,
      name : String,
      releasedYear : Number
    });//end Schema


//create global album model
var albums = mongoose.model( 'albums', albumSchema);


//uses
app.use(express.static('public'));
app.use( bodyParser.urlencoded ({extended: true}));

//globals
//port set up to work with heroku OR localhost
var port = process.env.PORT || 4567;

//spin up server
app.listen(port, function(){
  // console.log('server up on:', port);
});

app.get('/', function(req, res){
  // console.log('base url hit');
  res.sendFile( path.resolve('public/views/index.html') );
});//end home base

app.post('/albums', function(req,res){
  // console.log('in post albums', req.body);
  var newAlbums = albums(req.body);
  newAlbums.save();
  res.sendStatus(200);
});

app.get('/albums', function(req, res){
  // console.log('in get /albums');
  albums.find().then(function(data){
    // console.log('this is data:', data);
    res.send(data);
  });
});

app.delete('/albums/:id', function(req, res){
  console.log('in delete route', req.params.id);
  albums.remove( {_id: req.params.id}, function(err){
    if (err) {
      done();
      res.send(400);
    }else {
      res.sendStatus(200);
    }

  });

});
