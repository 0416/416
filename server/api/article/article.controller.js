/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /article              ->  index
 * POST    /article              ->  create
 * GET     /article/:id          ->  show
 * PUT     /article/:id          ->  update
 * DELETE  /article/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Article = require('./article.model');

// Get list of article
exports.index = function(req, res) {
  Article.find(function (err, article) {
    if(err) { return handleError(res, err); }
    return res.json(200, article);
  });
};

// Get a single Article
exports.show = function(req, res) {
  Article.findById(req.params.id, function (err, Article) {
    if(err) { return handleError(res, err); }
    if(!Article) { return res.send(404); }
    return res.json(Article);
  });
};

// Creates a new Article in the DB.
exports.create = function(req, res) {
  Article.create(req.body, function(err, Article) {
    if(err) { return handleError(res, err); }
    return res.json(201, Article);
  });
};

// Updates an existing Article in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Article.findById(req.params.id, function (err, Article) {
    if (err) { return handleError(res, err); }
    if(!Article) { return res.send(404); }
    var updated = _.merge(Article, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Article);
    });
  });
};

// Deletes a Article from the DB.
exports.destroy = function(req, res) {
  Article.findById(req.params.id, function (err, Article) {
    if(err) { return handleError(res, err); }
    if(!Article) { return res.send(404); }
    Article.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}