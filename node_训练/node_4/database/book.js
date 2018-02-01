var mongoose = require('./db');
var Schema = mongoose.Schema;
var book = new Schema({
  shardid: Number,
  bookname: String,
  link:String,
  date: Date
});
module.exports = {
  book:mongoose.model('book',book),
};