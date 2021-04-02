const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/spotifyPlaylists');
mongoose.Promise = global.Promise;

app.use(cors(4000));

//parse body data in JSON format
app.use(bodyParser.json());

//initialize and use the routes from the api.js file
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
  console.log(err);
  res.status(422).send({error:err.message});
});

//listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});
