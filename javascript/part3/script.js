"use strict";
// Numbers, Dates, Intl and Timers
/*
// 1. Converting and Checking Numbers

console.log(23 === 23.0);

// Number.parseInt()
const strNum = Number("123");
console.log(strNum);

const strNumAlt = +"123";
console.log(strNumAlt);

const strNumParse = Number.parseInt("30");
console.log(strNumParse);

const strNumParseLett = Number.parseInt("30px");
console.log(strNumParseLett);

const strNumParseRadix = Number.parseInt("10111", 2);
console.log(strNumParseRadix);

// Number.parseFloat()
const strNumParsFlt = Number.parseFloat("2.5rem");
console.log(strNumParsFlt);

// Number.isNaN()
console.log("isNaN results");
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20x")); // true
console.log(Number.isNaN(23 / 0)); // false - infinity

// Number.isFinite()
console.log("isFinite results");
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20x")); // false
console.log(Number.isFinite(23 / 0)); // false - Infinity



// 2. Math and Rounding

// Math.sqrt() OR  - value ** (1/2)
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

// cubic root - value ** (1/3)
console.log(8 ** (1 / 3));

// Math.max()
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));

// Math.min()
console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.min(5, 18, "23", 11, 2));
console.log(Math.min(5, 18, "23px", 11, 2));

// Constants
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// Math.random()
console.log(Math.random()); // between 0 and 1
console.log(Math.random() * 6); // between 0 and 5

const randomNumber = Math.random() * 6;
const truncatedNum = Math.trunc(randomNumber);
console.log(truncatedNum); // between 0 and 5

console.log(Math.trunc(randomNumber) + 1); // between 1 and 6

// random number generator
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(5, 10));
// console.log(randomInt(10, 20));

// Rounding integers
// Math.trunc()
const truncNum = Math.trunc(23.3);
console.log(truncNum);

// Math.round()
const random = Math.random();
console.log(random);
console.log(Math.round(random));
console.log(Math.round(23.1));

// Math.ceil()
console.log(Math.ceil(23.1));
console.log(Math.ceil(23.7));

// Math.floor()
console.log(Math.floor(23.3));
console.log(Math.floor(23.7));

// coercion - all rounding methods mentioned
console.log(Math.floor("23.3"));

// Math.trunc() and Math.floor - positive
console.log(Math.trunc(23.7));
console.log(Math.floor(23.7));

// Math.trunc() and Math.floor - negative
console.log(Math.trunc(-23.4));
console.log(Math.floor(-23.4));

// Rounding Floating Point Numbers (Decimals)
const floatNum = 23.56979772;
const floatNumRounded = floatNum.toFixed(2);
// (23.56979772).toFixed(2)
console.log(floatNumRounded);
console.log((23.56979772).toFixed(2));
console.log((23.56979772).toFixed(0));
console.log(+(23.56979772).toFixed(2)); // convert result of toFixed (string) to a number


// The Remainder Operator / Modulo Operator
console.log(5 % 2);
console.log(4 % 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(11));

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991n);
console.log(BigInt(9007199254740991));

const huge = 20289833023728382729347472n;
const num = 23;
const mixNum = huge * BigInt(num);
console.log(Math.sqrt(16n));

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".transaction__item")].forEach(function (
    row,
    i
  ) {
    if (i % 2 === 0) {
      row.style.backgroundColor = "orangered";
    }
    if (i % 3 === 0) {
      row.style.backgroundColor = "blue";
    }
  });
});
*/

// Creating Dates

// new Date()
const date = new Date();
console.log(date);

// new Date("...")
const dateArg = new Date("Aug 02 2020");
console.log(dateArg);

// new Date(date numbers)
const dateNumb = new Date(2031, 10, 19, 15, 23, 5);
console.log(dateNumb);

// January 1, 1970 - beginning of the time unit (0 millisecond)
console.log(new Date(0));
console.log(3 * 24 * 60 * 60 * 1000);

// Date methods
const future = new Date(2037, 10, 19, 15, 23);

// getFullYear()
const year = future.getFullYear();
console.log(year);

// getMonth()
const month = future.getMonth();
console.log(month);

// getMonth()
const dayOfMonth = future.getDate();
console.log(dayOfMonth);

// getDay()
const dayOfWeek = future.getDay();
console.log(dayOfWeek);

// getHours()
const hours = future.getHours();
console.log(hours);

// getMinutes()
const minutes = future.getMinutes();
console.log(minutes);

// getSeconds()
const seconds = future.getSeconds();
console.log(seconds);

// toISOString()
const isoString = future.toISOString();
console.log(isoString);

// getTime()
const time = future.getTime();
console.log(time);

console.log(new Date(2142253380000));

const todaysDate = new Date();

console.log("Today date: ", todaysDate);

const expiryDate = 30 * 24 * 60 * 60 * 1000 + todaysDate.getTime();
console.log(expiryDate);
console.log(new Date(expiryDate));

// Date.now() – timestamp of current time
console.log(Date.now());

// set – setFullYear()
future.setFullYear(2040);
console.log(future);

// Internationalizing Dates (Intl)
const dateOpt = new Date();

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

const locale = navigator.language;
console.log(new Intl.DateTimeFormat(locale, options).format(date));

// Internationalizing Numbers (Intl)
const num = 15374884;
const formatedNum = Intl.NumberFormat("en-US").format(num);

const formatedNumOpt = Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "mile-per-hour",
}).format(num);

const formatedNumOpt2 = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(num);
console.log(formatedNumOpt2);

// Timers: setTimeout and setInterval

// setTimeout()
setTimeout(() => console.log("Here is your Pizza"), 5000);

console.log("This code will run before the timeout code");

setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
  5000,
  "Bread",
  "Garlic"
);

function printOrder(ing1, ing2) {
  console.log(`Here is your Pizza with ${ing1} and ${ing2}`);
}

setTimeout(printOrder, 7000, "Cheese", "Onions");

const ingredients = ["Olive", "Spinach"];

const pizzaTimer = setTimeout(printOrder, 10000, ...ingredients);

if (!ingredients.includes("Spinach")) clearTimeout(pizzaTimer);

// setInterval()

const timerId = setInterval(function () {
  const timeNow = new Date();
  const hourTime = now.getHours();
  const minutesTime = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(`${hour}:${minutes}:${seconds}`);
}, 1000);
