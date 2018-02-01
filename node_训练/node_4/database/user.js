var mongoose = require('./db');
var Schema = mongoose.Schema;
var user = new Schema({
  name: String,
  password: String,
  date: Date
});
var z = new Schema({
  name: String,
  password: String,
  date: Date
});
module.exports = {
  user:mongoose.model('user',user),
  z:mongoose.model('z',z)
};