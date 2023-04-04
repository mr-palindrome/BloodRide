const mongoose = require('mongoose');
const signUpTemplate = new mongoose.Schema({
   fullname: {
      type: String,
      require: true
   },
   email: {
      type: String,
      require: true
   },
   username: {
      type: String,
      require: true
   },
   password: {
      type: String,
      require: true
   },
   age: {
      type: Number,
      require: true
   },
   bloodGroup: {
      type: String,
      require: true
   },
   date: {
      type: String,
      default: Date.now
   }
},
{
   timestamps:true
})
module.exports = mongoose.model('mytable', signUpTemplate)