
const bodyParser = require("body-parser");
const express = require ("express");
const { stringify } = require("querystring");
const request = require("request");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function (req, res){ 
    res.sendFile(__dirname + "/signup.html");  
});

app.post("/", function(req, res){
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;

    console.log(firstName)

    res.send("hello!, " + firstName + lastName + "thanks for join my Newsletter Apps" + email);
})

app.listen(port, function(){
    console.log("server is running at port" + port);
});