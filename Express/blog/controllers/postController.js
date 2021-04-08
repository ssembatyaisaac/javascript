const { body, validationResult } = require('express-validator');

var Post = require('../models/Post');
var Author = require('../models/Author');
var async = require('async');
var Comment = require('../models/Comment');

// Display all posts
exports.post_list = (req, res, next) => {

  Post.find()
    .exec((err, result) => {
      if(err) { return next(err); }

      //Successful so render
      res.render('Posts.index', { title:'Posts', post_list: result});
    });
};
