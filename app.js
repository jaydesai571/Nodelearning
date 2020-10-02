// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req, res) {
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     // myReadStream.pipe(res);
//
//     var myObj = {
//       name: 'Ryu',
//       job: ' Ninja',
//       age: '29'
//     };
//     res.end(JSON.stringify(myObj));
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('yo Dawgs, now listening to port 3000 ');
// // pipe is only for read stream


var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res) {
    // res.sendFile(__dirname + '/index.html');
    res.render('index');
});


app.get('/contact',function(req,res) {
    // res.sendFile(__dirname + '/contact.html');
    res.render('contact');
});

app.get('/profile/:name',function(req,res) {
    var data ={age:29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile',{person: req.params.name, data: data});
});

app.listen(3000);
