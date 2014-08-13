'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
  name: String,
  description: String,
  date: String,
  photo: String,
  active: Boolean
});

module.exports = mongoose.model('Person', PersonSchema);