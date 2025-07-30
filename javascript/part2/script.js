"use strict";

/*
// Functions
function logger(name) {
  console.log(`My name is ${name}`);
}

// Function parameters
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

// const result1 = add(19, 888);
// const result2 = add(36, 58);

// console.log(result1);
// console.log(result2);
// logger("Aishat");

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
const orangeJuice = fruitProcessor(0, 4);
// console.log(appleJuice);
// console.log(orangeJuice);

function cube(num) {
  return num * num * num;
}

const someValue = cube(6);
// console.log(someValue);

// Function declarations and expressions

// Function declaration

function calcAge(birthYear) {
  return 2025 - birthYear;
}

// console.log(calcAge(Number(prompt("Enter birth year"))));

// Function expression

const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
// console.log(calcAge2(Number(prompt("Enter birth year"))));

// const firstFunc = calcAge(2000);
// const secondFunc = calcAge2(2005);

// console.log(myName);
// const myName = "John Doe";

// Arrow functions
const calcAge3 = () => 2025 - 1991;
// console.log(calcAge3());

const printText = () => "this is an arrow function";
// console.log(printText());

const calcAge4 = (birthYear) => 2025 - birthYear;
// console.log(calcAge4(2000));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
// console.log(yearsUntilRetirement(1969, "John"));


// Functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;

  return juice;
}

// console.log(fruitProcessor(2, 3));

function yearsUntilRetirement(birthYear, firstName) {
  const age = 2025 - birthYear;
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
}

// console.log(yearsUntilRetirement(1999, "Sarah"));


// Arrays
// Creating arrays
const friends = ["John", "Sarah", "Oscar", "Steven", "Tina"];
// console.log(friends);
const years = new Array(1991, 1984, 2008, 2020, "Abel");
// console.log(years);

// Accessing data in arrays
// console.log(friends[0]);

// Getting length of arrays
// console.log(friends.length);

// Getting last element of arrays
// console.log(friends[friends.length - 1]);

// Changing elements in arrays
// console.log(friends);
// console.log(friends[3]);

friends[3] = "Rebbecca";
// console.log(friends);
// console.log(friends[3]);

friends[5] = "Aminat";
// console.log(friends);

const firstName = "John";
const person = [firstName, "Doe", 2025 - 1991, friends];
// console.log(person);

// Arra methods
// push
friends.push("Bunmi");
// console.log("After push: ", friends);

// unshift
friends.unshift("Zainab");
// console.log("After unshift: ", friends);

// pop
// friends.pop();
const poppedValue = friends.pop();
// console.log("After pop: ", friends);
// console.log("pop value: ", poppedValue);

// shift
friends.shift();
// console.log("After shift: ", friends);

// indexOf
const tinaPos = friends.indexOf("Tina");
friends[tinaPos] = "Jumoke";
// console.log("After mutation: ", friends);

// includes
// console.log(friends.includes("Abike"));

// Objects
const john = {
  firstName: "John",
  lastName: "Doe",
  age: 2025 - 1991,
  job: "teacher",
  friends: ["Peter", "Mike", "Steven"],
  isRegistered: true,
};
// console.log(john);

// Dot vs Bracket notations
const lstName = "Name";

// console.log(john.firstName);
// console.log(john["first" + lstName]);

// const interestedIn = prompt(
//   "What do you want to know about John? Choose between: firstName, lastName, age, job"
// );

// console.log(john[interestedIn]);

// Adding properties to objects
john.location = "Lagos";
john["email"] = "johndoe@email.com";
// console.log(john);

// Object methods
// 'this' keyword
const mark = {
  firstName: "Mark",
  lastName: "Anthony",
  birthYear: 1991,
  job: "teacher",
  friends: ["John", "Sarah", "Oscar"],
  hasDriverLicense: false,
  calcAge: function () {
    return 2025 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old, a ${
      this.job
    } and he has ${this.hasDriverLicense ? "a" : "no"} drivers license.`;
  },
};

// console.log(mark.getSummary());
// console.log(mark["calcAge"]());

function percentageOfWorld(population) {
  const worldPopulation = 7900;
  return (population / worldPopulation) * 100;
}

const populations = [551, 1441, 1393, 1260];

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

const neighbours = ["Niger", "Chad", "Cameroon", "Benin", "Gulf of Guinea"];
neighbours.push("Utopia");

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central european country :D");
// }

const indexOfGuinea = neighbours.indexOf("Gulf of Guinea");
neighbours[indexOfGuinea] = "Guinea";

// Iteration: Loops
// For loop

// for (let counter = 1; counter <= 10; counter = counter + 1) {
//   console.log(`Number ${counter}`);
// }

for (let counter = 0; counter <= neighbours.length; counter = counter + 1) {
  // if (counter === 0) console.log("List of Nigeria's neighbours:");
  // console.log(neighbours[counter]);
}

function neighboursIncludes(country) {
  for (let i = 0; i <= neighbours.length; i++) {
    if (neighbours[i] === country) {
      return true;
    }
  }
  return false;
}

const isIncludes = neighboursIncludes("Chad");

// console.log(isIncludes);

const types = [];
// types[0] = "Number 1";
// types[1] = "Number 2";
// types[2] = "Number 3";

for (let i = 0; i < 3; i++) {
  types[i] = `Number ${i + 1}`;
}
// console.log(types);

const hauwa = [
  "Hauwa",
  "Akinwunmi",
  2025 - 1997,
  "Business",
  ["Fati", "Kudi", "Kenny"],
  true,
];

// for (let i = 0; i < hauwa.length; i++) {
//   if (i === 0) console.log("Hauwa's info:");
//   console.log(hauwa[i]);
// }

const hauwaArrayTypes = [];

for (let i = 0; i < hauwa.length; i++) {
  // console.log(hauwa[i]);
  // hauwaArrayTypes[i] = typeof hauwa[i];
  hauwaArrayTypes.push(typeof hauwa[i]);
}

// console.log("hauwa: ", hauwa);
// console.log("hauwa info: ", hauwaArrayTypes);

const yearsArray = [1991, 2007, 1969, 2020];

const ages = [];

for (let index = 0; index < yearsArray.length; index++) {
  // console.log(`adding age ${index + 1} to ages array...`);
  const age = 2025 - yearsArray[index];
  ages.push(age);
}
// console.log(ages);

// Breaking
for (let index = 0; index < hauwa.length; index++) {
  // console.log(hauwa[index], ", ", typeof hauwa[index]);
  if (typeof hauwa[index] === "string") break;
}

// Continuing
for (let index = 0; index < hauwa.length; index++) {
  if (typeof hauwa[index] !== "string") continue;
  // console.log(hauwa[index], ", ", typeof hauwa[index]);
}

for (let i = hauwa.length - 1; i >= 0; i--) {
  // if (i === hauwa.length - 1) console.log("Hauwa's info:");
  // if (i === hauwa.length - 1) console.log("--------------");
  // console.log(hauwa[i]);
}

for (let exercise = 0; exercise < 4; exercise++) {
  // console.log(`....Starting exercise ${exercise} 💪`);

  for (let rep = 0; rep < 6; rep++) {
    // console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}🏋️‍♀️`);
  }
}

for (let i = 1; i <= 12; i++) {
  for (let j = 1; j <= 12; j++) {
    // console.log(`${i} x ${j} = ${i * j}`);
  }
}

// for (let i = 0; i < hauwa.length; i++) {
//   if (typeof hauwa[i] !== "object") console.log(hauwa[i]);
//   if (typeof hauwa[i] === "object") {
//     for (let j = 0; j < hauwa[i].length; j++) {
//       if (j === 0) console.log("My friends: ");
//       // const friends = hauwa[i];
//       console.log(hauwa[i][j]);
//       // console.log(friends[j]);
//     }
//   }
// }

// const hauwa1 = ["Hauwa", "Akinwunmi", 2025 - 1997, "Business", true];
// const hauwaFriends = ["Kudi", "Kenny", "Fati"];

// for (let i = 0; i < hauwa1.length; i++) {
//   console.log(hauwa1[i]);

//   if (i === hauwa1.length - 1) {
//     console.log("My friends List:");
//     for (let j = 0; j < hauwaFriends.length; j++) {
//       console.log(hauwaFriends[j]);
//     }
//   }
// }

// while loop

let counter = 1;
while (counter <= 100) {
  if (counter % 10 === 0) {
    console.log(`Lifting weight repitition ${counter}`);
  }
  counter++;
}

// How JavaScript Works Behind The Scene

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.followers = 0;
  }

  follow() {
    this.followers = this.followers + 1;
  }

  updateUser(phone, address) {
    this.phone = phone;
    this.address = address;
  }
}

class PremiumUser extends User {
  constructor(name, email) {
    super(name, email);
    this.verified = true;
  }
}

const aishat = new User("Aishat", "aishat@email.com");
aishat.follow();
aishat.follow();
aishat.updateUser(23465678686, "Lagos");
const john = new PremiumUser("John", "john@email.com");
console.log(aishat);
console.log(john);


let my_number = 34;
console.log(my_number);
let my_text = "This is my number";
console.log(my_number);


function soome() {
  const something = "djdf";
  console.log(something);
}

// soome();

// Scope and Scope of variables
// Global scope
const globalScopeVariable = "John Doe";

function firstFunc() {
  const age = 24;
  console.log(decade);

  if (age >= 18) {
    const decade = 3;
    var milenial = true;
    console.log(
      `${globalScopeVariable}, you are an adult. You are ${age} years old`
    );
  }

  console.log(decade);
  console.log(milenial);
}

firstFunc();

function printSomething() {
  console.log(`My name is ${globalScopeVariable}`);
}

// printSomething();
function calcAge(birthYear) {
  const now = 2027;
  const age = now - birthYear;
  var itWontWork = "this should not work";
  return age;
}

// console.log(itWontWork);
// console.log(now);

if (true) {
  let some = 5;
  const job = "Artist";
  var thisShouldWork = "Yes it should";
}

// console.log(now);
// console.log(some);
console.log(thisShouldWork);

for (let index = 0; index < 2; index++) {
  var element = index;
}

console.log(element);

const firstClassFunc = function () {
  console.log("This is a first class function!");
};

function onClick() {
  console.log("you clicked me");
}


const varrr = "some variables"; // Global scope

function firstFun() {
  const myName = "John";
  console.log(myAge);

  if (typeof varrr === "string") {
    let newVarr = "another string";
    var myAge = 23;
    console.log(myName);
    console.log("say something");

    function secondFunc() {
      const job = "teacher";
      console.log(job);
      console.log(myAge);
      console.log(newVarr);
      console.log(myName);
      console.log(varrr);
    }

    secondFunc();
  }

  console.log(newVarr);
  console.log(myAge);
}

// Variable environment: Hoisting

greet("John Doe");

function greet(name) {
  console.log(`Hello, ${name}`);
}

console.log(myName);
var myName = "Femi";

console.log(myAge);
let myAge = 23;

console.log(myJob);
const myJob = "Teacher";

add(5, 9);
var add = function (a, b) {
  const answer = a + b;
  console.log(answer);
};


var myVar = "hello";
let myLet = "hi";
const myConst = "hey";

// console.log(window.myVar);
// console.log(window.myLet);
// console.log(window.myConst);

// The this keyword
const person = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  },
};
// person.greet();

// this keyword in practice
const calcAge = function (birthYear) {
  console.log(2027 - birthYear);
  console.log(this);
};

// calcAge(1999);

const calcAgeArrow = (birthYear) => {
  console.log(2027 - birthYear);
  console.log(this);
};

// calcAgeArrow(2001);

const femi = {
  name: "Femi",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2027 - this.year);
  },
  print: function () {
    console.log(this.name);
  },
};

// femi.calcAge();
// femi.print();

const yemi = {
  year: 2017,
};

yemi.calcAge = femi.calcAge;
// yemi.calcAge();

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this.textContent);
});

// Regular vs Arrow functions
const john = {
  firstName: "John",
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);

    const sayHello = () => console.log(`Hello ${this.firstName}`);
    sayHello();

    const self = this;

    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

john.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    const number = arguments[i];
    result += number;
  }
  return result;
};

console.log(addExpr(2, 5, 8, 12, 34, 5, 18, 90));

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

// console.log(addArrow(2, 5, 8));
*/

const hello = "Hello";
// hello = "Hi";

const me = {
  firstName: "John",
  lastName: "Doe",
};

me.firstName = "Femi";
console.log(me);

//
