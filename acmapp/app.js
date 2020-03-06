var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.use(express.static("public"));
var solution = [];
var random;

app.get("/", function(req, res){
   var url = "https://thesimpsonsquoteapi.glitch.me/quotes"
   request(url, function(error, response, body){
       if(!error && response.statusCode == 200) {
           random = JSON.parse(body);
           res.render("acmproj" , {random: random})
       }
   });
});

app.listen(3000, function(){
  console.log("Somone made a connection");
});
