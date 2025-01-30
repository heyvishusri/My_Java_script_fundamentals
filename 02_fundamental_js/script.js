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

