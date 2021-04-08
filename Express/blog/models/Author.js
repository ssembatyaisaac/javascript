var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  first_name: {type: String, required: true, maxlength: 100},
  last_name: {type: String, required: true, maxlength:100},
  email_address: {type: String, required: true, maxlength: 100, unique: true},
  password: {type: String, required: true, maxlength: 100, default: 'password'},
  date_of_birth: {type: Date},
  username: {type: String, required: true, maxlength: 100, unique: true},
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]

})