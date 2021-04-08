console.log('Loading......')

// Get arugments passed on the command line
var userArgs = process.argv.slice(2);

var async = require('async');
var Post = require('./models/Post');
var Comment = require('./models/Comment');
var Author = require('./models/Author');

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var authors = [];
var posts = [];
var comments = [];