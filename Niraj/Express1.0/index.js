var express = require('express');
var bodyParser=require('body-parser');
var app = express();

app.use(express.static("Eulap"));
app.use(bodyParser.urlencoded({extended:true}));
//  app.get('/', function (req, res) {
//  res.sendFile(__dirname+"/index.html");

// //     // var times = req.query.times;
// //     // var message = req.query.msg;
// //     // if (times === undefined) {
// //     //     times = 10;
// //     // }
// //     // else {
// //     //     times = parseInt(times);
// //     // }
// //     // if (message === undefined) {
// //     //     message = "Hello World";
// //     // }
// //     // var data = "";
// //     // for (var i = 0; i < times; i++) {
// //     //     data += "<h1>" + message + "</h1>";
// //     // }
// //     // res.send(data);
//  });
app.use(function(err, req, res, next) {
    //do logging and user-friendly error message display
    res.send(500, 'internal server error');
  })

app.post('/Calci', function (req, res) {
    var op1 = req.body.op1;
    var op2 = req.body.op2;
    var action = req.body.action;
    if (op1 == undefined) {
        op1 = 10;
    }
    else {
        op1 = parseInt(op1);
    }
    if (op2 == undefined) {
        op2 = 10;
    } else {
        op2 = parseInt(op2);
    }
    if (action == undefined) {
        action ='add';
    }
    switch (action) {
        case "add": var ans = op1 + op2;
        //  res.render("index.html",{ans:ans});
     //res.sendFile(__dirname+"/Eulap/index.html");
        document.getElementById("h").innerHTML=ans;
        // res.send("<h1>Your answer is " + ans + "<h1>");
            break;
        case "-": if (op1 > op2) {
            var ans = op1 - op2;
            res.send("<h1>Your answer is " + ans + "</h1>");
        } else {
            res.send("<h1>Your answer is " + ans + "</h1>");
            ans = op2 - op1;
        }
        case "*": var ans = op1 * op2;
            res.send("<h1>Your answer is " + ans + "</h1>");
            break;
        case "/": var ans = op1 / op2;
            res.send("<h1>Your answer is " + ans + "</h1>");
            break;

        default: res.send("<h1>Nothing is done</h1>");
    }

});

app.listen(8081, function () {
    console.log('ExpressJS is running on port 8081');
});