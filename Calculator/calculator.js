// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var defaultPort= 3000;

app.listen(defaultPort, function(req,res){
  console.log("This server is running on port: " + defaultPort);
});

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of " + num1 + " + " + num2 + " = " + result);
});

app.get("/bmiCalculator", function(req,res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res) {
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var result = num1/Math.pow(num2,2);
  res.send("The result of BMI with weight: " + num1 + " kg and height: " + num2 + " m is: " + result + " kg/m^2");
});
