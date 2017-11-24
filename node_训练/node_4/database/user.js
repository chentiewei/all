var mongoose = require('./db');
var Schema = mongoose.Schema;
var user = new Schema({
  name: String,
  password: String
});
module.exports = mongoose.model('user',user);
