const { body, validationResult } = require('express-validator');

var Post = require('../models/Post');
var Author = require('../models/Author');
var async = require('async');
var Comment = require('../models/Comment');

// Display all posts
exports.comment_list = (req, res, next) => {

  Comment.find()
    .exec((err, result) => {
      if(err) { return next(err); }

      //Successful so render
      res.render('Posts.index', { title:'Commnents', comment_list: result});
    });
};
