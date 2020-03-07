const path = require("path");

module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/allposts", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/allposts.html"));
    });
  
    // blog route loads blog.html
    app.get("/register", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/register.html"));
    });

    app.get("/signin", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signin.html"));
      });

      app.get("/categories", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/categories.html"));
      });
  
  };
  