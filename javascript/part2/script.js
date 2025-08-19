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


const hello = "Hello";
// hello = "Hi";

const me = {
  firstName: "John",
  lastName: "Doe",
};

me.firstName = "Femi";
console.log(me);




const form = {
  username: "",
  email: "",
};

const btn = document.querySelector("button");
const input = document.querySelector("input");
const user = {};

btn.addEventListener("click", function () {
  registerUser("John Doe", "john@email.com", "08045384845");
  console.log(user);
});

function registerUser(name, email) {
  user.name = name;
  user.email = email;
  const args = arguments;

  if (args.length > 2) {
    console.log("arguments will loop");
    for (let i = 0; i < args.length; i++) {
      if (i > 1) {
        const prop = input.name;
        const value = args[i];
        user[prop] = value;
      }
    }
  }
}

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: "John",
  age: 30,
};

const persons = ["John", "Doe", "Femi"];

const friend = me;
friend.age = 27;

console.log("friend object", friend);
console.log("me object", me);


// Data structures

// 1. Destructing Arrays – const [variable names] = array

const arr = [3, 2, 5];
// const a=arr[0]
// const b=arr[1]
// const c=arr[2]

const [x, y, z] = arr;
// console.log(x);

const restaurant = {
  name: "Classico Italiano",
  location: "Lekki Phase 1",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Canapes", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // const orderItem = [
    //   this.starterMenu[starterIndex],
    //   this.mainMenu[mainIndex],
    // ];

    // return orderItem
  },
};

// const [first, second] = restaurant.categories;
const [first, , third] = restaurant.mainMenu;
// console.log("first category: ", first);
// console.log("third category: ", third);

// Switch elements
let [main, secondary] = restaurant.categories;
// console.log("before switch", main, secondary);

[main, secondary] = [secondary, main]; // main = secondary; secondary = main;
// console.log("after switch", main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

function add(a, b) {
  return a + b;
}

const result = add(8, 9);
console.log("Result: ", result);

// Destructing nested arrays
const nestedArr = [2, 4, [5, 6]];
const [i, , [j, k]] = nestedArr;
console.log(j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

function add2(a = 1, b = 1) {
  return a + b;
}

console.log(add2());

// Destructuring objects

const restaurant = {
  name: "Classico Italiano",
  location: "Lekki Phase 1",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Canapes", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // const orderItem = [
    //   this.starterMenu[starterIndex],
    //   this.mainMenu[mainIndex],
    // ];

    // return orderItem
  },
  orderDelivery: function (order) {
    const { starterIndex, mainIndex, time, address } = order;
    return console.log(
      `You have ordered for ${this.starterMenu[starterIndex]} starter, ${this.mainMenu[mainIndex]} main course and will be delivered at ${time} to this address, ${address}`
    );
  },
};

const { id } = { id: 0, name: "john", email: "john@email.com" };
// const {} = restaurant;
// console.log(id);

const iphoneName = "iPhone 16";

const iPhones = [
  {
    id: 0,
    model: "iPhone 16",
    color: "Black",
    prodYear: "2025",
    desc: "New apple iPhone 16",
    img: "https://amazon.aws.com/sdkdkfkfkk.png",
  },
  {
    id: 1,
    model: "iPhone 16 Pro Max",
    color: "Rose Gold",
    prodYear: "2025",
    desc: "New apple iPhone 16 Pro Max",
    img: "https://amazon.aws.com/sdkdkfkfkk.png",
  },
];

// Renaming destructured varables
const categories = ["Jos"];
const { categories: cat, tel = "090363" } = restaurant;
// console.log(cat, tel);

// Mutating variables while destructuring
let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};
// console.log(a, b);

({ a, b } = obj);

// console.log(a, b);

// Destructuring objects inside objects
const openHrs = {
  mon: { open: 8, close: 5 },
  tue: { open: 8, close: 5 },
  wed: { open: 8, close: 5 },
};

// const {mon}=openHrs
// const {open, close}=mon

const {
  mon: { open, close },
} = openHrs;

// console.log(`Open: ${open} – Close: ${close}`);

// Functions with many parameters
const order = {
  starterIndex: 1,
  mainIndex: 0,
  time: "10pm",
  address: "Lekki Phase 1",
};

restaurant.orderDelivery(order);

console.log(order.time);


// Spread operators
const arr = [7, 8, 9, 10, 11, 12, 13];
const badNewArr = [1, 2, arr[0], arr[1], arr[2], arr[3]];

// console.log(badNewArr);

const bestNewArr = [1, 2, ...arr];
// console.log(bestNewArr);
// console.log("directly unpacked ", "another arg", ...arr);
// console.log(...bestNewArr);

const restaurant = {
  name: "Classico Italiano",
  location: "Lekki Phase 1",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Canapes", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // const orderItem = [
    //   this.starterMenu[starterIndex],
    //   this.mainMenu[mainIndex],
    // ];

    // return orderItem
  },
  orderDelivery: function (order) {
    const { starterIndex, mainIndex, time, address } = order;
    return console.log(
      `You have ordered for ${this.starterMenu[starterIndex]} starter, ${this.mainMenu[mainIndex]} main course and will be delivered at ${time} to this address, ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// spread operator - create shallow copy of an array
const mainMenu = [...restaurant.mainMenu];
// console.log(mainMenu);

// spread operator - merge multiple arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables - arrays, strings, maps, sets

const str = "John";
const letters = [...str, " ", "s."];
// console.log(...letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt("Ingredient 2"),
//   prompt("Ingredient 3"),
// ];

function spreadArgs(ing1, ing2, ing3) {
  console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
}

// restaurant.orderPasta(...ingredients);
const ings = ["Soya", "cheese", "chicken"];
// spreadArgs(...ings);

// Spread operator - objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Rossi",
};

const restaurantBranch = {
  branchLocation: "Ikeja",
  founded: 2024,
};
const restaurantCopy = { ...restaurant };

const mergedRestaurant = {
  ...restaurant,
  ...restaurantBranch,
  ...newRestaurant,
};
// console.log(mergedRestaurant);

// Rest pattern - arrays (destructuring)
const [a, b, , ...others] = [1, 2, 3, 4, 5];
console.log(others);

//  ["Pizza", "Pasta", "Risotto", "Focaccia", "Canapes", "Garlic", "Bread", "Caprese Salad"]
// const mergedRestaurantMenu = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

const [food1, food2, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(food1, food2, otherFood);

// Rest pattern - functions
function add(...numbers) {
  console.log(numbers);
}

function spreadExa(arg1, arg2, ar3, arg4) {
  console.log(arg1 + arg2 + ar3 + arg4);
}
const args = [];
spreadExa(...[2, 5, 7, 9]);

add(2, 3);
add("hello", 23, "@", { id: 0, name: "john" });


// Short circuiting – &&, ||

//  OR ||

// console.log(3 || "John");
// console.log("" || "John");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "hello" || 23 || null);

const restaurant = {
  name: "Classico Italiano",
  location: "Lekki Phase 1",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Canapes", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  numGuest: 1,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // const orderItem = [
    //   this.starterMenu[starterIndex],
    //   this.mainMenu[mainIndex],
    // ];

    // return orderItem
  },
  orderDelivery: function (order) {
    const { starterIndex, mainIndex, time, address } = order;
    return console.log(
      `You have ordered for ${this.starterMenu[starterIndex]} starter, ${this.mainMenu[mainIndex]} main course and will be delivered at ${time} to this address, ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

//  AND &&
// console.log(0 && "John");
// console.log(1 && "John");
// console.log("hello" && 23 && null && "john");

if ("hello" && 23 && null && "john") {
  // console.log("AND returns true");
} else {
  // console.log("AND returns false");
}

// if (restaurant.orderPasta) {
//   restaurant.orderPasta("cheese", "chicken", "garlic");
// }

// restaurant.orderPasta && restaurant.orderPasta("cheese", "chicken", "garlic");

// Nullish coalescing operator – ??
restaurant.numGuest = 0;

const geustCorrect = null ?? undefined ?? false ?? 0 ?? 10;
console.log(geustCorrect);


// Looping Arrays
// for-of loop

const numbers = [1, 2, 3, 5];
const arr = ["John", "Rebbecca", "Anita", "Samson", "Aishat"];

for (const someVar of arr) {
  // console.log(someVar);
  if (someVar === "Rebbecca") {
    break;
  }
}

// Enhanced object literals
const input = document.querySelector("input");
const btn = document.querySelector("button");

const persons = {
  name: "John",
};

const age = 23;
const occupation = "Teacher";
const friends = ["Rebbecca", "Anita", "Samson", "Aishat"];
let email = "";

function closeAccount(password) {
  console.log(password);
}

const enhancedObj = {
  persons,
  age,
  friends,
  occupation,
  email,
  deleteFriend(index) {
    this.friends[index] = "";
  },
  closeAccount,
};

btn.addEventListener("click", function () {
  const value = input.value;
  console.log(value);
  enhancedObj.email = value;
  enhancedObj.deleteFriend(2);
  enhancedObj.closeAccount("myPassword");
  console.log(enhancedObj);
});

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [`user-${2 + 4}`]: "twenty three",
};

// console.log(openingHours);

// Optional chaining

// properties
//console.log(enhancedObj.person?.name);

for (const day of weekdays) {
  const open = openingHours[day]?.open ?? "closed";
  // console.log(`On ${day}, we open at ${open}`);
}

// console.log(persons["name"]);

// methods
enhancedObj.openAccount?.();

// arrays
const users = [
  { name: "John", email: "john@email.com" },
  { name: "Peter", email: "john@email.com" },
];

console.log(users[2]?.name ?? "user array is empty");


// Looping objects
const obj = {
  name: "John",
  age: 23,
  job: "teacher",
  length: "1.7cm",
};

const arr = ["one", "two"];

//console.log(arr.length);
//console.log(objLoop.length);

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

// Object.keys
for (const prop of Object.keys(obj)) {
  console.log(prop);
}

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   const element = Object.keys(obj)[i];
//   console.log("From for loop: ", element);
// }

// Object.values
for (const value of Object.values(obj)) {
  // console.log(value);
}

// Object.entries
for (const entry of Object.entries(obj)) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

// for (const [prop, value] of Object.entries(obj)) {
//   console.log(`${prop}: ${value}`);
// }


// Sets
const orderSet = new Set(["Pasta", "Pizza", "Pasta", "Garlic"]);
console.log(orderSet);

// Check size - createdSet.size
console.log(orderSet.size);

// Add element - createdSet.add(arg)
orderSet.add("Bread");
console.log(orderSet);

// Delete element - createdSet.delete(arg)
orderSet.delete("Pizza");
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
console.log(staff);

const staffUnique = new Set(staff);
console.log(staffUnique);

console.log("aishatambali".length);
*/

// Maps
const owner = {
  name: "John",
  age: 23,
  job: "teacher",
  length: "1.7cm",
  displayProfile: function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
  },
};

const rest = new Map();

// set - to fill the map up
rest.set("name", "Classico Italiano");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian"])
  .set(owner, "Founder")
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest);

// get - to read data from the map
rest.get(true);
console.log(rest.get("categories"));

// has (returns boolean) - to check if a map contains a certain key
console.log(rest.has("branch"));

// delete (returns boolean) - to delete element from the map
rest.delete(owner);

// clear - to clear/remove all the elements from the map
rest.clear();
console.log(rest);

// Maps Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try again"],
]);

// Creating maps from an object - Object.entries(object)
const ownerMap = new Map(Object.entries(owner));
console.log(ownerMap);

// Iterating
for (const [key, value] of question) {
  if (key === "question") {
    console.log(value);
    console.log("---------------");
  }

  if (typeof key === "number") {
    console.log(`${key}: ${value}`);
  }
}

// Convert maps to an array
const newArrFromMap = [...question];
console.log(newArrFromMap);

console.log([...question.keys()]);
console.log([...question.values()]);

//

owner.displayProfile();
