const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');

//get the list of all playlists from the database
router.get('/playlists',function(req,res,next){
  //this gets all the playlists because the find function is fed no filters.
  Playlist.find({}).then(function(playlists){
    res.send(playlists);
  });

});

//add a new playlist to the database
router.post('/playlists',function(req,res,next){
  //console.log(req.body);
  //creates and saves the new playlist in the database
  Playlist.create(req.body).then(function(playlist){
    //return the saved playlist from the database
    res.send(playlist);
  }).catch(next);

});

//update a playlist which is already in the list of all playlists from the database
router.put('/playlists/:id',function(req,res,next){

  Playlist.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Playlist.findOne({_id:req.params.id}).then(function(playlist){
      res.send(playlist);
    });
  });

});

//delete a playlist which is already in the list of all playlists from the database
router.delete('/playlists/:id',function(req,res,next){
    if (req.params.id == "deleteall"){
      Playlist.find({}).then(function(playlists){
        for (playlist of playlists){
          //console.log(playlist._id);
          Playlist.findByIdAndRemove({_id:playlist._id}).then(function(playlist){
            //console.log(playlist);
          });
        }
        res.send(playlists);
      });

    }
    else{
      Playlist.findByIdAndRemove({_id:req.params.id}).then(function(playlist){
        res.send(playlist);
      });
    }


});

module.exports = router;
