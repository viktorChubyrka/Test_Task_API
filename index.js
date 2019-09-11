var express = require("express");
var cors = require("cors");
var request = require("request");
var app = express();

app.use(cors());

var url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=b963fd9700be4f3da3923767e55f294a";

app.get("/", function(req, res) {
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      var titles = [];
      info["articles"].forEach(e => {
        var title = e["title"];
        titles.push(title);
      });
      res.send(titles);
    }
  });
});
app.listen(3000);
