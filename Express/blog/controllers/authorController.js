const { body, validationResult } = require('express-validator');

var Post = require('../models/Post');
var Author = require('../models/Author');
var async = require('async');
var Comment = require('../models/Comment');

// Display all posts
exports.author_list = (req, res, next) => {

  Author.find()
    .exec((err, result) => {
      if(err) { return next(err); }

      //Successful so render
      res.render('Authors.index', { title:'Posts', author_list: result});
    });
};
