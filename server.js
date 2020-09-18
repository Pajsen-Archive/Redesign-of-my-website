

// server.js
// where your node app starts


const express = require("express");
const app = express();


const api = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];



app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname +  "/views/index.html");
  
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname +  "/views/contact.html");
});

app.get("/api", (req, res) => {
  res.sendFile(__dirname +  "/views/api.html");
});

app.get("/software", (req, res) => {
  res.sendFile(__dirname +  "/views/software.html");
});

app.get("/acf-coding", (req, res) => {
  res.sendFile(__dirname + "/views/acf-coding.html")
});
app.get("/mobile", (req, res) => {
  res.sendFile(__dirname + "/views/mobile/index.html")
})

app.get("/iphone", (req, res) => {
  res.sendFile(__dirname + "/views/mobile/iphone.html")
})

app.get("/ipad", (req, res) => {
  res.sendFile(__dirname + "/views/mobile/ipad.html")
})



app.use(function (req, res, next) {
  //res.status(404).send("Sorry can't find that!")
  res.sendFile(__dirname + "/views/404.html"); 
});




const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);

});


