// var fs = require('fs');
//
// var readMe = fs.readFileSync('readme.txt', 'utf8', function(err, data) {
//   console.log(data);
// });
// fs.writeFileSync('writeMe.txt', 'readMe');


var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe1.txt')
myReadStream.on('data', function(chunk) {
  console.log('new chunk received');
  myWriteStream.write(chunk);
});


// var server = http.createServer(function(req, res) {
//   console.log('require was made: ' + req.url );
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hey ninjas');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('yp daws, now listening to port 3000');








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
