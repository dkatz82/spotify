const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name:{
    type:String,
    required: [true,'Artist Name Field is required']
  },
  id: {
    type:String,
    required: [true,'Artist Spotify id Field is required']
  }
});

const AlbumSchema = new Schema({
  name:{
    type:String,
    required: [true,'Album Name Field is required']
  },
  id: {
    type:String,
    required: [true,'Album Spotify id Field is required']
  }
});

const TrackSchema = new Schema({
  name:{
    type:String,
    required: [true,'Track Name Field is required']
  },
  id:{
    type:String,
    required: [true,'Track Spotify id Field is required']
  },
  href:{
    type:String,
    required: [true,'Track href Field is required']
  },
  album:AlbumSchema,
  artists: [ArtistSchema]
});

const PlaylistSchema = new Schema({
  name:{
    type:String,
    required: [true,'Playlist Name Field is required']
  },
  id:{
    type:String,
    required: [true,'Playlist Spotify id Field is required']
  },
  href:{
    type:String,
    required: [true,'Playlist href Field is required']
  },
  tracks:[TrackSchema]
});

// //geolocation Schema
// const GeoSchema = new Schema({
//   type: {
//     type: String,
//     default: "Point"
//   },
//   coordinates:{
//     type:[Number],
//     index:"2dsphere"
//   }
// });
//
// //create ninja Schema and model
// const NinjaSchema = new Schema({
//   name: {
//     type: String,
//     required: [true,'Name Field is required']
//   },
//   rank: {
//     type: String
//   },
//   available:{
//     type:Boolean,
//     default: false
//   },
//   //add in geo location from above Schema
//   geometry: GeoSchema
// });
//
// const Ninja = mongoose.model('ninja',NinjaSchema);
//
// module.exports = Ninja;

const Playlist = mongoose.model('playlist',PlaylistSchema);
module.exports = Playlist;
