// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

var defaultPort = 3000;
app.listen(defaultPort, function(req, res) {
  console.log("The server is running on port: " + defaultPort);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var options = {
    url: "https://apiv2.bitcoinaverage.com/convert/global",
    method: "GET",
    qs: {
      from: req.body.crypto,
      to: req.body.fiat,
      amount: req.body.amount
    }
  }

  request(options, function(err, response, body) {
    var data = JSON.parse(body);
    var price = data.price;
    var date= data.time;
    res.write('<h1>The current date is ' + date + ".</h1>");
    res.write("<h1>The current price of " + req.body.amount + " " + req.body.crypto + " is " + price + " " + req.body.fiat + ".</h1>");
    res.send();
  });
});
