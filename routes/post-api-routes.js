const db = require("../models");

module.exports = function(app) {
    app.get("/api/posts", function(req, res) {
        db.Post.findAll({ }).then(function(dbUser) {
          res.json(dbUser);
        });
      });
    app.post("/api/posts", function(req, res) {
        db.Post.create(req.body).then(function(dbPost) {
          res.json(dbPost);
        });
      });
};