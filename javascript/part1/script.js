/*
// Variables
// keyword variable_name = value
let person = "John";
console.log(person);
let myName = prompt("enter your name");
console.log(myName);

// Naming conventions
// - Camel case
let firstName = "John";
let lastName = "Doe";
let occupation = "Programmer";

// Constant variables
let BIRTHYEAR = 1999;
let PI = 3.1415;

// Descriptive
let nameFirst = "Segun";
let nameLast = "Adeyemi";

// Invalid variable names
// DO NOT start with numbers
let name1 = "Sarah";

// Letters, numbers, underscore, dollar sign
let hobby = "Music";
let hobby2 = "Reading";
let full_name = "John Doe";
let $salary = 100000;

// Reserved js keywords
// function, const, name

// Uppercase letters
let Birthday = "";



// The 7 Primitives (Primitive Data Types)
// 1. Numbers
let age = 30; // 30 = type number

// 2. String
let education = "Masters"; // Masters = type string

// 3. Boolean
let javascripIsFun = false; // true = type boolean

education = false;

console.log(age);
console.log(education);
console.log(javascripIsFun);

// 4. Undefined
let futureOccuputaion;
console.log(typeof futureOccuputaion);

// Boolean Logic: And, Or & Not
// A=true AND B=true = true
let a = true;
let b = true;
console.log("AND", a && b);

// C=true OR D=false = true
let c = true;
let d = false;
console.log("OR", c || d);

// C=true OR D=false = true
let e = true;
let f = false;
console.log("NOT e", !e);
console.log("NOT f", !f);

let population = 227.9;
console.log(population + " in million");



// let, const & var
// mutable
let age = 30;
age = 31;
console.log(age);

// immutable
const birthYear = 1990;
console.log(birthYear);

var job = "Teacher";
job = "Nurse";
console.log(job);



// Basic Operators

// 1. Mathematical or Arithmetic operators
// - minus
const now = 2025;
const ageJohn = now - 1999;
const ageDoe = now - 2005;
console.log(ageJohn, ageDoe);

//  - plus
const firstName = "Aishat";
const lastName = "Ambali";
const fullName = firstName + " " + lastName;
const number1 = 34;
const number2 = 22;
const result = number1 + number2;

console.log(firstName + lastName);
console.log(fullName);
console.log(result);

// 2. Assignment operators
//  - equal - =
let x = 10 + 5;
console.log("first x: ", x);

// plus-equal - +=
x += 10;
console.log("second x: ", x);

// minus-equal - -=
x -= 10;
console.log("third x: ", x);

// plus-plus - ++
let y = 5;
y++;
console.log(y);

// minus-minus - --
let z = 11;
z--;
console.log(z);

// 3. Comparison operators
// - greater than: >
const johnIsOlder = ageJohn > ageDoe;
console.log(johnIsOlder);

// - less than: <
const johnIsYounger = ageJohn < ageDoe;
console.log(johnIsYounger);

// - greater than or equal: >=
const johnIs50plus = ageJohn >= 50;
console.log(johnIs50plus);

// - less than or equal: <=
const johnIsUnder20 = ageJohn <= 20;
console.log(johnIsUnder20);

// - exactly equal: ===
const johnIs20 = ageJohn === 26;
console.log(johnIs20);

// - exactly equal: ==
const johnIsStil20 = ageJohn == 26;
console.log(johnIsStil20);


console.log(26 === "26"); // false
console.log(26 == "26"); // true

console.log(26 + 26);
console.log(26 + "26");


// Operator precedence

// console.log(30 / 2 + 6);
// console.log((30 + 2) / 6);

// Strings
const firstName = "Kunle";
const lastName = "Ambali";
const birthYear = 1999;
const now = 2025;
const job = "teacher";

// Concantenation
console.log(
  "I'm " +
    firstName +
    " " +
    lastName +
    ", a " +
    (now - birthYear) +
    " years old " +
    job
);

// Template Literals
const aboutMe = `I'm ${firstName} ${lastName}, a ${
  now - birthYear
} years old ${job}`;

console.log(aboutMe);

console.log("String with \n multiple \n lines");

console.log(`String with
multiple
lines`);


// Conditional Statements - if/else statements

const age = 19;
const isOldEnough = age > 20;

if (isOldEnough) {
  console.log("Sarah can start a driving license 🚘");
} else {
  console.log("Sarah can not start a driving license 😢");
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// Type conversion and coercion
// Type conversion
// String to number - Number(string)

const ageString = "21";
const ageNum = Number(ageString);

console.log("age string: ", ageString + 1 + 3); //2113
// console.log("age string type: ", typeof ageString);
console.log("age number: ", ageNum + 1 + 3); //25
// console.log("age number type: ", typeof ageNum);

// Error - NaN - cannot convert strings which are not figures into numbers
const someValue = "john";
const modifiedSomeValue = Number(someValue);
console.log(modifiedSomeValue);

// Number to string - String(number)
const age = 34;
const ageText = String(age);
console.log("unconverted age: ", typeof age);
console.log("converted age: ", typeof ageText);

console.log("I am " + age + " years old");

// Plus (+) - plus only converts numbers to strings
console.log("23" + "10" + 3);

// Minus (-) - minus converts strings to number
console.log("23" - "10" - 3);

// Multiplication (*) - multiplication also converts strings to number
console.log("23" * 3);

// Division (/) - division also converts strings to numbers
console.log("23" / 2);

// Logical operators (><…) - also converts strings to numbers
console.log("23" > 18);
console.log("23" > "18");

// Guess the output
let n = "1" + 1;
n = n - 1;
console.log(n);

let money = 50;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}


// Equality operators - == vs ===
// ===
const age = 18;

if (age === "18") console.log("Strict: You just became an adult! 🎉");

if (age == "18") console.log("Loose: You just became an adult! 🎉");

// Prompt - function
const favouriteNumberString = prompt("What is your favourite number?");
const favouriteNumber = Number(favouriteNumberString);

// if (favouriteNumber === 23) {
//   console.log("Cool. 23 is an amazing number!");
// } else if (favouriteNumber === 7) {
//   console.log("Cool. 7 is also an amazing number!");
// } else if (favouriteNumber === 8) {
//   console.log("Cool. 8 is a magic number!");
// } else {
//   console.log("Number is neither 23, 8 nor 7");
// }

// Difference Operator - !== / !=
// if (favouriteNumber !== 23) {
//   console.log("Number is not 23");
// } else {
//   console.log("Number is 23");
// }

if (favouriteNumberString != 23) {
  console.log("Number is not 23");
} else {
  console.log("Number is 23");
}


// Boolean logic
// And - A && B

const A = true;
const B = false;
const C = false;

if (A && B) {
  // console.log("Sarah can drive 🚘");
} else {
  // console.log("Sarah can not drive 😢");
}

// Or - A || B
if (A || B || C) {
  // console.log("Sarah can drive 🚘");
} else {
  // console.log("Sarah can not drive 😢");
}

// Not - !A
if (!B) {
  // console.log("Sarah can drive 🚘");
} else {
  // console.log("Sarah can not drive 😢");
}


// Examples - And, Or & Not
const age = Number(prompt("Enter your age"));

const A = age >= 20;
const B = age < 30;

if (A || !B) {
  console.log("Age is greater or equal 20");
} else {
  console.log("Age is less than 30, but not greater than 20");
}


// Switch statement

const day = prompt("Enter day of the week").toLowerCase();

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory notes");
    break;
  case "wednesday":
    break;
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("Do personal projects");
    break;
  case "saturday":
    console.log("Meet with friends");
    break;
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

// Statements and Expressions
console.log(
  `Prompt value (${day}) is printed to the console with a template literal`
);



// Conditional (ternary) operator
const age = Number(prompt("Enter your age!"));

age >= 16
  ? console.log("You are older than 16")
  : console.log("You are under 16");

let isOldEnough;
age >= 18 ? (isOldEnough = "18+") : (isOldEnough = "Under 18");
console.log("Is old enough: --- ", isOldEnough);
*/
