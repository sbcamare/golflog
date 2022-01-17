var express = require('express');
var app = express();
var port = 8089;
var fs = require('fs');
var options = {encoding:'utf8', flag:'r'};
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    fs.readFile('./index.html', options, function(err, data) {
        if (err){
          console.log("Failed to open index.html file.");
          res.status(500);
          res.write("Server Side Error!");
          res.send()
        } else {
          res.status(200);
          res.write(data);
          console.log("Data Successfully Loaded!");
          res.send()
        }
      });
});

app.get("/score", (req, res) => {
  fs.readFile('./score.html', options, function(err, data) {
    if (err){
      console.log("Failed to open score.html file.");
      res.status(500);
      res.write("Server Side Error!");
      res.send()
    } else {
      res.status(200);
      res.write(data);
      console.log("Data Successfully Loaded!");
      res.send()
    }
  });
});

app.post("/score", (req, res) =>{
  console.log(req.body.date);
  res.send("posted");
});

app.get("/profile", (req, res) => {
  res.send("profile!")
});

app.get("/history", (req, res) => {
  res.send("history!")
});


 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});


