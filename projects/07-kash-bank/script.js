"use strict";

/////////////////////////////
// Data

// Account: movements, currency and locale

const account1 = {
  owner: "John Smith",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 50],
  interestRate: 1.2, // %
  email: "johnsmith@email.com",
  password: "johnsmith",
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
  ],
  currency: "EUR",
  locale: "de-DE",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, 790, -3210, -1000, 8500, -30],
  interestRate: 1.5, // %
  email: "jessicadavis@email.com",
  password: "jessicadavis",
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "NGN",
  locale: "ng-NG",
};

const account3 = {
  owner: "Steven Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7, // %
  email: "stevenwilliams@email.com",
  password: "stevenwilliams",
  movementsDates: [
    "2019-04-03T01:06:06.000Z",
    "2019-05-11T11:22:22.000Z",
    "2019-06-05T06:16:16.000Z",
    "2019-06-05T07:16:16.000Z",
    "2020-08-01T10:51:36.790Z",
    "2020-11-01T05:12:12.000Z",
    "2020-12-07T12:18:18.000Z",
    "2020-12-05T11:16:16.000Z",
  ],
  currency: "USD",
  locale: "en-US",
};
const account4 = {
  owner: "Sarah James",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1, // %
  email: "sarahjames@email.com",
  password: "sarahjames",
  movementsDates: [
    "2019-03-09T07:18:18.000Z",
    "2019-03-03T02:12:12.000Z",
    "2019-04-04T04:13:13.000Z",
    "2020-05-11T13:22:22.000Z",
    "2020-07-01T04:12:12.000Z",
  ],
  currency: "GBP",
  locale: "en-GB",
};

const accounts = [account1, account2, account3, account4];

// Elements

// Login - page
const pageLogin = document.getElementById("login-page");
const inputEmail = document.querySelector(".login__user--email");
const inputPassword = document.querySelector(".login__user--password");
const buttonLogin = document.getElementById("login_btn");

// Home – page
const pageHome = document.getElementById("home-page");
const labelGreeting = document.querySelector(".greeting");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".figure__in");
const labelSumOut = document.querySelector(".figure__out");
const labelSumInterest = document.querySelector(".figure__interest");
const labelTimer = document.querySelector(".timer");

const containerMovements = document.querySelector(".transactions__list");

const btnSort = document.querySelector(".sort");
const btnTransfer = document.querySelector(".btn__transfer");
const btnLoan = document.querySelector(".btn__loan");
const btnClose = document.querySelector(".btn__close");
const btnLogout = document.querySelector(".logout__btn");

const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseEmail = document.querySelector(".form__input--email");
const inputClosePin = document.querySelector(".form__input--pin");

// Variables
let loggedInUser; // NOTE user should be null

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const minutes = `${now.getMinutes()}`.padStart(2, 0);

labelDate.textContent = `As of ${day}/${month}/${year}, ${hour}:${minutes}`;

// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) => {
    return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
  };

  const daysPassed = calcDaysPassed(new Date(), date);

  if (Math.trunc(daysPassed) === 0) return "Today";
  if (Math.trunc(daysPassed) === 1) return "Yesterday";
  if (Math.trunc(daysPassed) <= 7) return `${Math.trunc(daysPassed)} days ago`;

  return new Intl.DateTimeFormat(locale, {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(date);
};

let timer;

// User login
const loginUser = function () {
  const email = inputEmail.value;
  const password = inputPassword.value;

  if (!email) {
    alert("email cannot be empty");
  } else if (!password) {
    alert("password cannot be empty");
  } else {
    //Loop accounts to check user login details
    const account = accounts.find(
      (account) => account.email === email && account.password === password
    );

    if (account) {
      loggedInUser = account;
      // remove login screen & show home screen
      pageLogin.classList.remove("active");
      pageHome.classList.add("active");
      updateUI();
      if (timer) clearInterval(timer);
      timer = startLogoutTimer();
      inputEmail.value = inputPassword.value = "";
    } else {
      alert("Invalid email or password");
    }
  }
};

const logoutUser = function () {
  loggedInUser = null;
  pageHome.classList.remove("active");
  pageLogin.classList.add("active");
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach((mov, i) => {
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <li class="transaction__item">
        <p class="name">${loggedInUser.owner}</p>
        <p class="date">${displayDate}</p>
        <p class="amount ${mov > 0 ? "inward" : "outward"}">${formattedMov}</p>
      </li>
      `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// Display greetings
const displayGreeting = function (owner) {
  labelGreeting.textContent = `Good day, ${owner.split(" ")[0]}`;
};

// Calculate and display account balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accu, curr) => accu + curr, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

// Calculate and display movement summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

// sarahjames@email.com
// stevenwilliams@email.com
// johnsmith@email.com

const updateUI = () => {
  displayMovements(loggedInUser);
  displayGreeting(loggedInUser.owner);
  calcDisplayBalance(loggedInUser);
  calcDisplaySummary(loggedInUser);

  // NOTE remove later
  // pageLogin.classList.remove("active");
  // pageHome.classList.add("active");
};

// Timer

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      logoutUser();
    }

    // Decrease 1s
    time--;
  };

  // Set time to 10 minutes
  let time = 600;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// Event handlers
buttonLogin?.addEventListener("click", (e) => {
  e.preventDefault();
  loginUser();
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (account) => account.password === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    loggedInUser.balance >= amount &&
    loggedInUser.email !== receiverAcc.email
  ) {
    // do transfer
    loggedInUser.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI();

    inputTransferTo.value = "";
    inputTransferAmount.value = "";
  } else {
    alert("Invalid transfer");
  }
});

// close account
btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    loggedInUser.email === inputCloseEmail.value &&
    loggedInUser.password === inputClosePin.value
  ) {
    const index = accounts.findIndex((acc) => acc.email === loggedInUser.email);
    accounts.splice(index, 1);
    logoutUser();
    inputCloseEmail.value = inputClosePin.value = "";
  } else {
    alert("invalid credentials");
  }
});

// Request loan
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && loggedInUser.movements.some((mov) => mov >= amount * 0.1)) {
    // approve loan
    loggedInUser.movements.push(amount);
    inputLoanAmount.value = "";
    updateUI();
  } else {
    alert("You are not qualified for the requested loan amount");
  }
});

// sorting transaction list
let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(loggedInUser.movements, !sorted);
  sorted = !sorted;
});

btnLogout.addEventListener("click", logoutUser);

// Lessons
/*
// Looping arrays - forEach
const movements = [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97];

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

for (const [i, movement] of movements.entries()) {
  // console.log(`For index ${i} of: ${movement}`);
}

movements.forEach(function (mov, i, array) {
  if (i < 2) {
    // console.log("The array: ", array);
  }

  if (mov > 0) {
    // console.log(`You deposited ${mov} - ${i}`);
  } else {
    // console.log(`You withdrew ${Math.abs(mov)}`);
  }
});

// forEach with Maps and Sets
// Maps
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBR", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);

  if (key === "USD") {
    // console.log(map);
  }
});

// Sets
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log("Sets");
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}`);
});

// Data Transformations: map, filter, reduce
// map()
const nums = [2, 4, 7];
const numsMulti = nums.map((num, i, arr) => num * 2);
console.log(numsMulti);

// filter()
const movements = [200, -200, 340, 300, 20, -50, 400, 460];
const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

// reduce()
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

const letters = ["A", "B", "C", "D"];
const descLetters = letters.reduce((a, b) => b + a);
console.log(descLetters);

const movements = [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 45000];
const min = movements.reduce(function (accu, mov) {
  if (accu < mov) {
    return accu;
  } else {
    return mov;
  }
}, movements[0]);

console.log(min);

// Chaining methods
const movements = [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97];

const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, curr) => acc + curr, 0)
  .toFixed(2);
console.log(totalDepositsUSD);

// find()
const arr = ["John", "Aisha", "Tunde"];
console.log(arr.find((el) => el === "Aisha"));

// findIndex()
const arr = [2, 4, 6, 7]
console.log(arr.findIndex((el) => el === 4));

// some()
const arr = [2, -4, 6, -7, 1]
console.log(arr.some((el) => el >= 3));

function higherOrder(param, callback) {
  callback(param);
}

function print(name) {
  console.log(name);
}

function method(fn) {
  const testArr = [2, -4, 6, -7, 1];
  for (let i = 0; i < testArr.length; i++) {
    const element = testArr[i];
    fn(element, i, testArr);
    
  }
}

higherOrder("Aishat", (el) => console.log(el));
higherOrder(5, (el) => console.log(el * el));
higherOrder("John", print);
method((one, two, three) => console.log(one, two, three));

// every()
const movements = [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97];
console.log(movements.every((mov) => mov > 0));

// using callback functions
const deposit = (value) => value > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


// flat()
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arr2 = [[1, 2, 3, ["a", "b", "c", [-5, -6]]], [4, 5, 6], 7, 8];
console.log(arr2.flat(3));

// flatMap()
const overallBalance = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);


// sort()
const owners = ["John", "Aishat", "Adam", "Martha", "Zach"];
// console.log(owners);
// console.log(owners.sort());

const movements = [200, 455, -306.5, 25000, -642.21, -133.9, 79];
// console.log(movements);
// console.log(movements.sort());

// Ascending order
const arr = [3, 6, 2, 7, 9, 1];
const sortedArrAsc = arr.sort((a, b) => {
  if (a > b) return 1; // if we return a positive value (any value > 0) then B will be sorted before A
  if (b > a) return -1;
});
// console.log(sortedArrAsc);

// Descending order
const sortedArrDesc = arr.sort((a, b) => {
  if (a > b) return -1; //if we return a value less than 0, then A will be sorted before B.
  if (b > a) return 1;
});
// console.log(sortedArrDesc);

const arr = [3, 6, 2, 7, 9, 1];
const strArr = ["John", "Johnsmith", "Zainab", "Yomi", "Aisha"];
const strSortDesc = strArr.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(strSortDesc);
console.log(strArr.sort());

// Ascending order
const sortedArrAsc2 = arr.sort((a, b) => a - b);
console.log(sortedArrAsc2);

// Descending order
const sortedArrDesc2 = arr.sort((a, b) => b - a);
console.log(sortedArrDesc2);

const add = (x, y) => x + y; // if you use an arrow function, and the return logic is in one line, you don't need a curly braces.

const minus = (x, y) => {
  // if however, the return logic is more than one line, you MUST use curly braces and must use the RETURN keyword.
  return x - y; // Even if the logic is one line and you decide to use curly braces, you must also use the RETURN keyword.
};
console.log(add(5, 10));


// new Array() - contructor function
const emptyArr = new Array(7);

// fill()
emptyArr.fill("Aisha");

// value and start/end index
emptyArr.fill("John", 4);
console.log(emptyArr);

const notEmptyArr = [1, 2, 4, 6];
notEmptyArr.fill(2);
console.log(notEmptyArr);

const fromArr = Array.from({ length: 8 }, () => 1);
console.log(fromArr);

const fromArrValIndex = Array.from({ length: 10 }, (_, index) => index + 1);
console.log(fromArrValIndex);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(document.querySelectorAll(".amount"), (el) =>
    Number(el.textContent.replace("₦", ""))
  );
  console.log(movementsUI);
});

// Summary: Which Array Method to Use?

// 1.
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);
console.log(bankDepositSum);

// 2.
const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposit1000);

// OR:
const numDeposit1000Two = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
console.log(numDeposit1000Two);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      sums[curr > 0 ? "deposits" : "withdrawals"] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log("deposits", deposits);
console.log("withdrawals", withdrawals);

// 4.
const convertTitleCase = function (title = "") {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exeptions = [
    "a",
    "an",
    "and",
    "the",
    "but",
    "or",
    "on",
    "in",
    "to",
    "with",
  ];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exeptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a long title, but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

// const exeptions = [
//   "a",
//   "an",
//   "and",
//   "the",
//   "but",
//   "or",
//   "on",
//   "in",
//   "to",
//   "with",
// ];
// const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

// const title = "this is a Nice tiTle";
// const lowerTitle = title.toLowerCase();
// console.log(lowerTitle);
// const splitedTitle = lowerTitle.split(" ");
// console.log("splited title", splitedTitle);
// const capitalizedWords = splitedTitle.map((word) =>
//   exeptions.includes(word) ? word : capitalize(word)
// );
// console.log("mapped title", capitalizedWords);
// const joinedTitle = capitalizedWords.join(" ");
// console.log("joined title: ", joinedTitle);
// const capitalizeTitle = capitalize(joinedTitle);
// console.log("Final capitalized title: ", capitalizeTitle);

// const firstLetter = title[0];
// console.log(firstLetter);
// const firstLetterUpp = firstLetter.toUpperCase();
// console.log(firstLetterUpp);
// const titleRest = title.slice(1);
// console.log(titleRest);
// const capitalizedResult = firstLetterUpp + titleRest;
// console.log(capitalizedResult);

*/
