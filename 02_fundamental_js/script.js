//Activiting the strick mode:
// ==========================


'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive! : D');
*/

/*
Flow of Execution
The code starts with hasDriversLicense = false and passTest = true.
The first if checks passTest (which is true), so it sets hasDriversLicense to true.
The second if checks hasDriversLicense (now true), so it logs "I can drive! : D" to the console.
*/


//Functions
// ==========================
/*
function logger() {
    console.log('My name is Vishwash Kumar Sriwastava.');
}

logger(); // Call the function
logger(); // Call the function
logger(); // Call the function


//Function with parameters
// ==========================
function fruitProcessor(apple, banana) {
    const qnty1 = `I have ${apple} apples and ${banana} bananas.`;
    return qnty1; // Return the string instead of assigning console.log() to qnty1
}

const appleqnty1 = fruitProcessor(5, 0);
console.log(appleqnty1);

const bananaqnty1 = fruitProcessor(0, 3);
console.log(bananaqnty1);

*/

//Function Declaration vs. Expression
// ==========================

//Function Declaration

/*
function calcAge(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge(1991);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

//Arrow Function
// ==========================
/*
const calcAge3=birthYear => 2037 - birthYear;
const age3=calcAge3(1991);
console.log(age3);

const yearRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearRetirement(2003, 'Vishwash'));
*/

//Calling A function inside a function: Data Flow
// ==========================

/*
 const cutPieces = function (fruit){
    return fruit * 4;
}
const fruitProcessor = function (apple, orange){
    const applePieces = cutPieces(apple);
    const orangePieces = cutPieces(orange);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2,3));

*/

//Reviewing Functions
// ==========================

/*
const calcAge = function (year){
    return 2037 - year;
}

const yearUntilRetirement = function(birthyear,f_name){
    const age = 2037 - birthyear;
    const retirementAge = 70- age;
    if(retirementAge >0){
        console.log(`${f_name} retires in ${retirementAge} years.`);
        return retirementAge;
    }
    else{
        console.log(`${f_name} has already retired.🥳`);
        return -1;
    }
    
}
console.log(yearUntilRetirement(2003,'Vishwash'));
console.log(yearUntilRetirement(2004,'Alok'));
*/
/* Write your code below. Good luck! 🙂 */

/*
CHALLENGE #1
================
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
*/

/*
//Test1:
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);

//Test2:
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

//Introduction to the Arrays:
// ==========================

/*
const friend1 = 'Alok';
const friend2 = 'Priya';
const friend3 = 'Vishus';

const friends = ['Alok', 'Priya', 'Vishus'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(years[0]);
console.log(years.length);
console.log(years[years.length - 1]);

friends[1]='Sandeep';
console.log(friends);

const firstName = 'Vishwash';
const newArrays =[firstName, 'is', 2035-2003, 'years', 'old', friends];
console.log(newArrays);

//Exercises
const calcAge= function (birthYear){
    return 2037 - birthYear;
}
const years1 = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years1[0]);
 //Age of the first element in the array
 const age2 = calcAge(years1[years1.length - 1]);
console.log(age1,age2);

const ages = years1.map(calcAge); //calculate age of each element in the array
console.log(ages);
*/

//Basic Array Operationa 
// ==========================
/*
const friends = ['Alok', 'Priya', 'Vishus'];
const friendLenth= friends.push('Sandeep'); //Add element at the end of the array and return the length of the array
console.log(friends);
console.log(friendLenth);

friends.unshift('John'); //Add element at the beginning of the array
console.log(friends);

friends.pop(); //Remove the last element from the array
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //Remove the first element from the array
console.log(friends);

const indexFind=friends.indexOf('Priya'); //Return the index of the element in the array
console.log(indexFind);
console.log(friends.indexOf('Alok'));

console.log(friends.includes('Priya')); //Return true if the element is present in the array
console.log(friends.includes('0'));

if(friends.includes('Priya')){
    console.log('You have a friend called Priya');
}
*/

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

/*
const calcTip = function(bill){
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills, tips, total);
*/


//Objects
// ==========================


//Array vs OBject : 
//Array: Order matters in the array and the index is used to access the element
//Object: Order doesn't matter in the object and the key is used to access the element

/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];


const jonas = {
firstName: 'Jonas',
lastName: 'Schmedtmann',
birthYear: 2037 - 1991,
job: 'teacher',
family: ['Michael', 'Peter', 'Steven']
};


console.log(jonas);
console.log(jonas.lastName); //firstName is the key and Jonas is the value
console.log(jonas['lastName']);   //[lastName] is the key and Jonas is the value
console.log(jonas['birthYear']); // First way to access the element in the object

const nameKey = 'Name';
console.log(jonas['last' + nameKey]);//Second way to access the element in the object

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, birthYear, job, and family');

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Invalid input!  Choose between firstName, lastName, birthYear, job, and family');
}

jonas.location = 'India';
jonas['twitter'] = '@vishwash9931';
console.log(jonas);

//challenge
//Jonas has three friends, and his best friend is called Michael.
console.log(`${jonas.firstName} has ${jonas.family.length} friends, and his best friend is called ${jonas.family[0]}.`);    //Jonas has 3 friends, and his best friend is called Michael.

*/


//Object Methods
// ==========================

/*
const jonas = {
    firstName: 'Raju',
    lastName: 'Kumar',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLinces: true,

    
    
    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // },

    // calcAge: function(){
    //     // console.log(this); //this = jonas object
    //     return 2037 - this.birthYear; //return the age of the object method = jonas object method
    //     },


    calcAge: function(){
        this.age = 2037 - this.birthYear; //return the age of the object method = jonas object method 
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLinces ? 'a' : 'no'} driver's license.`;
    }
};
// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991)); // 46


console.log(jonas.calcAge()); // 46
console.log(jonas.age); // 46


console.log(jonas.getSummary());
*/


/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
 
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
 
mark.calcBMI();
john.calcBMI();
 
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}

*/


//iteration : The Loop
// ==========================
// for (let rep = 1; rep<=10; rep++){
//     console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
// };




// for (let rep = 1; rep<=10; rep++){
//     if(rep%2===0){
//         console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
//     }else if(rep%2===1){
//         console.log(`Running on the treadmill repetition ${rep}🏃‍♂️`);
       
//     }else{
//         console.log(`Resting ${rep} minute`);
//     }

//     // console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
// };

//47. Looping Arrays, breaking and continuing
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const types = [];
for(let i=0; i < jonas.length; i++){

  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]); 

  //filling types array
  // types[i] = typeof jonas[i]; 
  types.push(typeof jonas[i]);
}  

console.log(types);
*/
/*
const multiVariables = ["ram",2,true,"vishu",5,7,false,"alok"];
const newVariables =[];
for (let i=0; i<multiVariables.length; i++){
  if(typeof multiVariables[i] == "string"){
    newVariables.push(typeof multiVariables[i]);

  }
}
console.log('This is typeof my variable: ',newVariables);
*/
/*
//continue and break
const forContinue = ["dog",1,2,3,'alok','vishu',5,7,false,"alok",5];
console.log('---ONLY STRING ---');
for (let i = 0; i<forContinue.length; i++){
  if(typeof forContinue[i] !== 'string') continue;
  console.log(forContinue[i], typeof forContinue[i]);
}

console.log('---BREAK WITH NUMBER ---');
for (let i = 0; i<forContinue.length; i++){
  if(typeof forContinue[i] === 'number') break;
  console.log(forContinue[i], typeof forContinue[i]);
}
  */

//48. Looping Backwards and loops in loops
//Looping Backwards
/*
const backLoop = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];
//0,1,2,3.....
//4,3,.......

for (let i=backLoop.length-1; i>=0; i--){
  console.log(i,  backLoop[i]); //i is counter object 
}
*/


//Nested Loops
/*
for (let speed = 1; speed < 4; speed++ ){
  console.log(`--- Speed ${speed} ---`);

  for (let distance = 1; distance < 6; distance++ ){
    console.log(`Speed ${speed}: Walking ${distance} km`);
  }
}
 
*/


//49. The while Loop
/*
let rep = 1;
while(rep<=10){
  console.log(`Lifting weight repetition: ${rep}🏋🏻`);
  rep++;
}
*/


/*
let dice = Math.trunc(Math.random() * 6) + 1; 
// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
// Multiplying by 6 scales the value to be between 0 and 5.999.
// Math.trunc() removes the decimal part, ensuring values between 0 and 5.
// Adding 1 shifts the range to 1 to 6, mimicking a dice roll.

while(dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice !== 6){
    console.log('Not a 6, rolling again...');
  }
}
  */

//50. exercise
/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/


// SOLUTION
const calcTip = function (bill){
  return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
  }
  console.log(bills, tips, totals);

  const calcAverage = function(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(calcAverage([2,3,7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));  // 3.5