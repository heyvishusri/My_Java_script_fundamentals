// console.log(age);
// var age = 25;
// console.log(age);

// age = 100;
// console.log(age);
// let age = 30;

// myFun();
// var myFun = function () {
//   console.log("First");
// };
// myFun();
// function myFun() {
//   console.log("Second");
// }
// myFun();

// var variable = 10;
// (() => {
//   console.log(variable);
//   var variable = 20;
//   console.log(variable);
// })(); // IIFE=Immediately Invoked Function Expression:
// console.log(variable);
// var variable = 30;

// variable = 10;
// (() => {
//   foo = 100;
//   console.log(variable);
//   var foo = 100;
//   variable = 20;
//   console.log(variable);
// })();
// console.log(foo);
// console.log(variable);
// var variable = 30;

// for (var i = 0; i < 10; i++) {
//   //if var i= 0 then output 10 times 10
//   //if let i=0 then output 0 to 9
//   setTimeout(() => console.log(i), 0); //0 milliseconds
//   // console.log("Hello");
// }

// const vishu = {
//   name: "Vishwajeet",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// setTimeout(() => (vishu.sayName(), 3 * 1000));
// // vishu.sayName();

const obj = {
  height: 10,
};
console.log(obj.height);
delete obj.height;
console.log(obj.height);
obj.height = 20;
console.log(obj.height);
