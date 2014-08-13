'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  name: String,
  description: String,
  date: String,
  photo: String,
  link: String,
  active: Boolean
});

module.exports = mongoose.model('Article', ArticleSchema);