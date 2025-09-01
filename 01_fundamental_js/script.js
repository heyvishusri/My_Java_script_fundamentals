/*let js='amazing';
    //   if (js==='amazing') 
    //   alert('JavaScript is FUN!');
       
console.log(40+8+23-10);
let firstName = "Vishu";
let lastName = "Kumar";
console.log(firstName+' '+lastName);

let vishu_kumar="Srivastava";
let $function = 27;

let person ="vishu";
let PI = 3.1415;

let myFirstJob ="coder";
let myCurrentJob ="teacher";

let job1 ="programmer";
let job2 ="teacher";

console.log(myFirstJob+' is my first job & '
    +myCurrentJob+' is my current job');


//Assignment - part 01
let country = "India";
let continent = "Asia";
let population = 1438;

console.log(country);
console.log(continent);
console.log(population);

// Data types
//primitive types


let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

let age = 30;
age = 31;
console.log(age);
console.log(typeof age);



let _name = "John Doe";
console.log(typeof _name);


let studentName = "Vishwash_Kumar";
let id = 1;
let grade = 9.5;
let branch = "Information Technology";
console.log("My name is " + studentName + " . ID is "
    + id + " . Grade is " + grade + " . Branch is " + branch 
 );
 
// const assign one time 
// const job;
//  const img = "vishwash_Kumar";
//  img="vishu";

var job = "programmer";
job = "student";

*/

//BASIC OPERATORS
//Arithmetic operators

/* const now = 2037;
const ageVishu = now - 2001;
const ageAlok = now - 2001;

console.log(ageVishu, ageAlok);
console.log(ageVishu*2);

const name1= "vishu";
const name2 = "kumar";
console.log(name1+' '+name2);

// Assignment Operators


let x = 10+5;
x += 5;
x *= 2;
x -= 1;
x /= 13;
x %= 3;
x++;
x--;
console.log(x);

// Comparison Operators
console.log(ageVishu>ageAlok); //36>36 --false
console.log(ageVishu<ageAlok); //36<36
console.log(ageVishu===ageAlok); //36===36 --true

const isFullAge = ageVishu>=18;
console.log(isFullAge);


now2=2036;
console.log(now2-2020> now2-2018);

let x1,y1;
x1=y1=10-5-1;
console.log(x1,y1);


const averageAge1= (ageAlok+ageVishu)/2;
console.log(ageAlok,ageVishu,averageAge1);
*/

/*Javascript Fundamental - Part 1
//-----------
coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).*/

/*const marksMass = 95;
const marksHeight = 1.88;
const marksBMI = marksMass / (marksHeight ** 2);

console.log(marksBMI);

const johnMass = 85;
const johnHeight = 1.76;
const johnBMI = johnMass / (johnHeight ** 2);

console.log(johnBMI);

if (marksBMI > johnMass) {
    console.log("mark's BMI("+marksBMI+") is higher than John's("+johnBMI+"!");
    }
else{
    console.log("John's BMI("+johnBMI+") is higher than Mark's("+marksBMI+"!");
    }
*/

// console.log('I am \n\
// learning\n\
// JavaScript');

/*const birthYear = 2012;
let century;
if (birthYear<=2000)
     {
         century = 20;
     }
else{
         century = 21;
     }
console.log(century);
*/

//Type conversion function
/*const inputYear = '1991';
console.log(Number(inputYear),inputYear+18);
console.log(typeof(inputYear));
console.log(Number(inputYear) + 18); // convert string to number
console.log(String(Number(inputYear) + 18)); // convert number back to string

console.log(Number("Vishu"));
console.log(typeof NaN);
console.log(isNaN("12"));
*/

//type coercion
/*console.log('9' - '5');
console.log('9' + 5);
console.log('9' * '5');
console.log('9' / '5');
console.log('9' == 9);
console.log('9' === '9');
console.log('9' === 9);
*/

/*let a='1' + 1; //11
let b=1 + '1'; //11
console.log(a,b);

console.log(2+3+4+'5')
console.log(2+3+'5'+6)
console.log('2' + 3 + 4 + '5')
*/

/*
let x=10;
console.log(++x); //11
console.log(x); //11
console.log(x--); //11
console.log(x); //10
console.log(x += 2); //12
console.log(x); //12
console.log(x -= 2); //10
console.log(x); //10
console.log(x *= 2); //20
console.log(x); //20
console.log(x /= 2); //10
console.log(x); //10
console.log(x %= 2); //0
console.log(x); //0
console.log(x **= 2); //0
console.log(x); //0

console.log(typeof (++x)); //number
console.log(typeof (x--)); //number
console.log(typeof (x += 2)); //number
console.log(typeof (x -= 2)); //number
console.log(typeof (x *= 2)); //number
console.log(typeof (x /= 2)); //number
console.log(typeof (x %= 2)); //number
console.log(typeof (x **= 2)); //number
console.log(typeof (x)); //number

console.log(typeof (x++)); //number
console.log(typeof (x--)); //number
console.log(typeof (x += 2)); //number
console.log(typeof (x -= 2)); //number
console.log(typeof (x *= 2)); //number
console.log(typeof (x /= 2)); //number
console.log(typeof (x %= 2)); //number
console.log(typeof (x **= 2)); //number
console.log(typeof (x)); //number 
// */

//5 falsy values: 0,'',undefined,null,NaN,
/*console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Vishu'));
console.log(Boolean({}));


const money=0;
if (money) {
    console.log('You have some money');
} else {
    console.log('You have no money');
}

let height;
if (height) {
    console.log('Variable height is defined');
} else {
    console.log('Variable height is not defined');
}
    // */
//Equality operator == and ===
/*const age= 18;
if (age===19)
    console.log('You just became an adult: D');
*/

/*const age1 = '18';
if(age1 === 18) console.log('You just became an adult: D (strict)');
if(age1 == 18) console.log('You just became an adult:D(loose)');
*/
/*
const favourite = prompt("What's your favourite?");
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23){
    console.log('I love that number');
}else if (favourite === 7){
    console.log('7 is also cool');
}
else if (favourite === 9){
    console.log('9 is a prime number');
}else{
    console.log('I don\'t know what that is');
}

*/

/*
//Basic Boolean Logic : The and ,or & not operator



//Logical operator
const hasDriversLicense=true; //A
const hasGoodVision=true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive){
//     console.log('You can drive');
// }else{
//     console.log('You should not drive');
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && !isTired);


*/
//CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

/* Write your code below. Good luck! 🙂 */

/*
const avgScoreOfDolphins=(96+108+89)/3;
const avgScoreOfKoalas=(88+91+110)/3;

const scoreDolphins=avgScoreOfDolphins;
const scoreKoalas=avgScoreOfKoalas;

if (scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy");
}else if (scoreKoalas>scoreDolphins){
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy😊🏆');
}
  */

/*
const scoreDolphins= (97 + 112 + 80)/3;
const scoreKoalas= (109 + 95 + 50)/3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy");
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 
    100){
        console.log("Koalas win the trophy");
}else if(scoreDolphins === scoreKoalas && scoreKoalas>=100){
    console.log('Both win the trophy');
}else{
    console.log('No one wins the trophy');
}
 
*/

//The switch statement
/*
const day=prompt('Enter Your Day?') ;
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videoes');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record video');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}
        */

/*
// conditionals switch statement

const day=prompt('Enter Your Day? ') ;
if (day=== 'monday') {
    console.log('Plan course structure');
    
}
else if (day === 'tuesday') {
    console.log('Prepare theory videoes');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
}
else if (day === 'friday') {
    console.log('Record video');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
}
else {
    console.log('Not a valid day');
}
// switch statement is more readable and easier to understand than if else statement
*/

//Statement and expression
//expression is a value, statement is an action
//expression is evaluated to a value, statement is executed
//expression is used in a value context, statement is used in a control context
//expression is used in a place where a value is expected, statement is used in a place where
//an action is expected
/*
3+4 //expression
console.log('hello') //statement


const me= 'vishu';
const age= 25;
console.log(`My name is ${me} and I am ${age} years old.`);
*/

//Conditional Operator (Ternary operator)....
// const age=23;
// age>=18? console.log('You are Eligible.'):
// console.log('You are not Eligible.');

/*
const age=15;
const message= age>=18 ? 'You are Eligible.👍' : 'You are not Eligible😵';
console.log(message); //You are Eligible.

let drinks;
if (age >= 18) {
    drinks = 'Beer🍷';
} else {
    drinks = 'Water💧';
}
console.log(drinks); //Beer

console.log(`I like to drink ${age>=18 ? 'beer🍷' : 'water💧'}`);
*/

/*
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉  */

// const bill = 275;
// const tip= bill<=300 && bill >=50 ? bill*0.15 : bill*0.2;
// const total = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
