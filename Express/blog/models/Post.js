var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: {type: String, required:true, maxlength: 100},
    post_details: {type: String, required: true, maxlength: 1000},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
  }
);

//Virtual for the post url
PostSchema
.virtual('url')
.get(() => {
  return `/post/${this._id}`;
})

//Export model
module.exports = mongoose.model('Post', PostSchema);