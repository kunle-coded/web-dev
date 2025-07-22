// console.log("Hello world!");

// class Sample {
//   constructor(parameters) {
//     this.name = parameters;
//   }
//   pop = function name(params) {};
// }

// const anObject = new Sample("My object");
// anObject.pop;

// const arr = new Array();
// arr.length;

// const pol = "My name";
// pol.split();
// pol.length;

// const user = {
//   id: 0,
//   name: "",
//   email: "",
//   followers: 0,
//   following: 0,
// };

// function follow(id) {}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  follow() {
    this.followers = this.followers + 1;
  }

  updateUser(phone, address) {
    this.phone = phone;
    this.address = address;
  }
}

const aishat = new User("Aishat", "aishat@email.com");
console.log(aishat);
