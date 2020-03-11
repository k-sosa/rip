const db = require("../models");
const path = require("path")

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

      app.post('/upload', function(req, res) {
        if (!req.files || Object.keys(req.files).length === 0) {
          return res.status(400).send('No files were uploaded.');
        }
      
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.sampleFile;
      console.log(sampleFile)
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(path.join(__dirname,'../public/image1.png'), function(err) {
          if (err)
            return res.status(500).send(err);
      
          res.send('File uploaded!<img src="/image1.png" />');
        });
      });
};