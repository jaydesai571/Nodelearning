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

app.get('/',function(req,res) {
    res.send('this is home page');
});


app.get('/contact',function(req,res) {
    res.send('this is contact page');
});

app.get('/profile/:id',function(req,res) {
    res.send('you requsted to see a profile with the id:' + req.params.id);  
});

app.listen(3000);
