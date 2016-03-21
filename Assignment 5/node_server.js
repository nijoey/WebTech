"use strict";
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("."));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

 var winCount=0;
 var loseCount=0;
 
app.post("/flip",function (req,res) {
   
    var coinToss= (Math.floor(Math.random() * 2) === 0) ? "head_s" : "tails_s";
    
    if(coinToss === req.body.call){
        res.send({"Wins":"You won"});
        winCount += 1;
    }
    else{
        res.send({"Lost":"You Lost"});
        loseCount += 1;
    }
});

app.get("/stats", function (req,res) {
     res.send({"Wins":winCount,"Lost":loseCount});
});
