"use strict";

// Object-Oriented Programming (OOP) with JavaScript

/*
const personName = new String("John");
const occupation = "Student";
const favNums = [1, 3, 5];
const newArr = new Array(1, 5, 9);

// console.log(personName.length);
// console.log(occupation.length);
console.log(favNums);
console.log(newArr);

const containsArr = function (value) {
  for (let i = 0; i < favNums.length; i++) {
    if (favNums[i] === value) {
      console.log(true);
      break;
    } else {
      console.log(false);
      break;
    }
  }
};

containsArr(2);

console.log(favNums.includes(2));

// favNums.forEach((e) => console.log("Number is ", e));
*/

// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const john = new Person("John", 1999);
const matilda = new Person("Matilda", 2005);
const jack = new Person("Jack", 2011);

console.log("Person 1: ", john);
console.log("Person 2: ", matilda);
console.log("Person 3: ", jack);
console.log(j1);
