var mongoose = require('./db');
var Schema = mongoose.Schema;
var bookDetail = new Schema({
  shardid: Number,
  bookname: String,
  writer:String,
  img: String,
  intro:String,
  update: String,
  chapter:{}
});
module.exports = {
  bookDetail:mongoose.model('bookDetail', bookDetail),
};