const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articalSchema = new Schema({
  userNameee: String,
}); 

const Mydata = mongoose.model("Mydataa", articalSchema);

module.exports = Mydata;