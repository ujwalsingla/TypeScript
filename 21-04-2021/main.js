"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
var total = 10;
var name = 'Ujwal';
var sentence = "My name is " + name + " I am beginner in Typescript";
console.log(sentence);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var anyType;
anyType = 20;
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Ujwal',
    lastName: 'Singla'
};
fullName(p);
