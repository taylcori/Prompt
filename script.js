var name = "Cori";
var name2 = "Bob";

var prompter= prompt("Hey, what is your name?");
var greeting = "Hello, my name is "+prompter;

var question= prompt("Cool! What is your favorite color?");
var answer = "My favorite color is "+question;

document.querySelector(".words").innerHTML = greeting
document.querySelector(".words2").innerHTML = answer