//task 1
function rollDice(){
    return Math.floor(Math.random()*6)+1;
    for (let i =0; i<5; i++) {
        console.log(" النرد :"+ rollDice());
    }
}
//task 2
const randomNumber = Math.floor(Math.random()*10)+1;
const userGuess = 7;
if(userGuess===randomNumber){
    console.log("صحيح");
}else if (userGuess > randomNumber){
    console.log("اعلى من الرقم");
} else {
    console.log("اقل من رقم");
}
//task
function getGrade(score) {
if (score >= 90 && score <= 100) {
 return "A";
  } else if (score >= 80 && score <= 89) {
 return "B";
  } else if (score >= 70 && score <= 79) {
 return "C";
  } else if (score >= 60 && score <= 69) {
 return "D";
  } else if (score >= 0 && score < 60) {
return "F";
  } else {
 return "error";
  }
}
console.log(getGrade(95));  
console.log(getGrade(105)); 
// task4
let cart = [];

cart.push("Laptop");
cart.push("Mouse");
cart.push("Keyboard");

console.log("Cart items: " + cart[0] + ", " + cart[1] + ", " + cart[2]);
console.log("Total items: " + cart.length);
//task5
const numbers = [3, 7, 2, 9, 5];
let largest = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number is: " + largest);
//task6
let n = 10;
while (n > 0) {
    console.log(n);
    n--;
}
//task7
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
        evenNumbers.push(number[i]);
    }
}
console.log("Even numbers: " + evenNumbers);
//taskBonus
let username = "admin";
let password = "1234";
if (username == "admin" && password == "1234") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}