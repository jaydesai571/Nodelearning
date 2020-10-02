// var time = 0;
//
// var timer = setInterval(function(){
//   time += 2;
//   console.log( time + ' sec have passed');
//   if(time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);


// console.log(__dirname);
// console.log(__filename);

// function callFunction(fun) {
//   fun();
// }

//normal function expression
// function sayHi() {
//   console.log('hi');
// }
// sayHi();

//function expression
// var sayBye = function() {
//   console.log('Bye');
// };
//
// callFunction(sayBye());

// var stuff = require('./stuff');
// console.log(stuff.counter(['shaun', 'srystal', 'ryu']));
// console.log(stuff.adder(5,6));
// console.log(stuff.pi);
// console.log(stuff.adder(5,stuff.pi));


var events = require('events');

// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function(msg) {
//   console.log(msg);
// });
//
// myEmitter.emit('someEvent', 'the event was emitter');

var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(person.name + ' said:' + msg);
  });
});


james.emit('speak', 'hey dude');
ryu.emit('speak', 'I want a curry');
