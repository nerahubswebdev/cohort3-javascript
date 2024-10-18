console.log("hello guys");

// var name = "miles";
// console.log(name);

const name = "miles";
console.log(name);

const student_name = "kingggggg";
console.log(student_name);
console.log(typeof student_name);

// decare a number variable and log it
const hd = 300;
console.log(hd);
console.log(typeof hd);

const done_well = false;

// operations

// sum two numbers
console.log(2 + 2);

const first_number = 8;

console.log(first_number + 8);

const num_one = 4;
const num_two = 5;

console.log(num_one + num_two);

const num_three = 4;
const num_four = 46;
const thesame = num_three === num_four;
console.log("log for same number: ", thesame);

const same_again = num_three !== num_four;
console.log("log for same again number: ", same_again);

const num_five = 7;
const num_six = 10;

const greater_than = num_five <= num_six;
console.log(greater_than);

// working with arrays

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = ["a", "b", "c", "d", "e"];
const array3 = [...array1, ...array2];

console.log("the first array: ", array1);

const new_array2 = array2.pop();
const shift_array2 = array2.shift();
const unshift_array2 = array2.unshift(6);
console.log("the pooped ", new_array2);
console.log("the pooped array ", array2);
console.log("the shifted array ", array2);
console.log("the unshifted array ", array2);

const first_slot = array1[0];
console.log("the first slot : ", first_slot);

const b = array1.pop();
const h = array1[1];

const area = (b * h) / 2;

// objects in javascript

// a person object
const student = {
  stdnt_name: "Youuuuu",
  stdnt_class: "ss5",
  stdnt_subject: "physics",
  stdnt_age: 67,
  stdnt_fav_foods: ["cake", "rice", "soup"],
};

console.log("student data : ", student);
const person_name = student.stdnt_name;

console.log("person name again ", student.stdnt_name);
console.log("person name ", person_name);

const food = student.stdnt_fav_foods[1];

const people = [
  {
    name: "Alice",
    location: "New York",
    age: 28,
    savings: 12000,
    voted: true,
  },
  {
    name: "Bob",
    location: "Los Angeles",
    age: 34,
    savings: 15000,
    voted: false,
  },
  {
    name: "Charlie",
    location: "Chicago",
    age: 25,
    savings: 8000,
    voted: true,
  },
  {
    name: "Diana",
    location: "Miami",
    age: 30,
    savings: 20000,
    voted: true,
  },
  {
    name: "Ethan",
    location: "Dallas",
    age: 22,
    savings: 5000,
    voted: false,
  },
  {
    name: "Fiona",
    location: "Seattle",
    age: 29,
    savings: 18000,
    voted: true,
  },
  {
    name: "George",
    location: "San Francisco",
    age: 40,
    savings: 25000,
    voted: true,
  },
  {
    name: "Hannah",
    location: "Boston",
    age: 35,
    savings: 30000,
    voted: false,
  },
  {
    name: "Ian",
    location: "Atlanta",
    age: 27,
    savings: 7000,
    voted: true,
  },
  {
    name: "Julia",
    location: "Denver",
    age: 31,
    savings: 9000,
    voted: false,
  },
];

console.log(people);

const totalSavings = people.reduce((sum, person) => sum + person.savings, 0);
console.log("total savings of all: ", totalSavings);

// const num1 = parseFloat(prompt("Enter the first number"));
// const num2 = parseFloat(prompt("Enter the second number"));
// // const mun3 = 4;
// // const mun5 = 6;
// console.log("the num 1 :", num1);
// console.log("the num 2 :", num2);

// const addition = num1 + num2;
// const subtract = num1 - num2;
// const multiply = num1 * num2;
// const division = num1 / num2;
// console.log("the result = ", addition);
// console.log(`the addition result = ${addition}`);

// console.log(
//   `the results of all operations : Addition: ${addition}\n Difference: ${subtract}\n multiply: ${multiply}\n division: ${division}`
// );

// const line1 = prompt("Enter line one");
// const line2 = parseInt(prompt("Enter line one"));

// const sentence = `${line1}\nHe is ${line2} years old`;

// console.log(sentence);

// const animal = "dog";

// if (animal === "dog") {
//   console.log("yes it is a dog");
// }

// if (animal === "cat") {
//   console.log("yes it is a dog");
// } else {
//   console.log("it is not a cat");
// }

// const firstnumber = parseFloat(prompt("Enter line one"));
// const secondnumber = parseFloat(prompt("Enter line one"));

// if (firstnumber > 20) {
//   console.log("yes it is greater");
// } else {
//   console.log("not greater");
// }

// if (secondnumber < firstnumber) {
//   console.log("yes it is less than");
// } else {
//   console.log("not less");
// }

// if (firstnumber % 2 === 0) {
//   console.log("this is an even number");
// } else if (secondnumber > firstnumber) {
//   console.log("this is a prime number");
// } else if (firstnumber >= 50) {
//   console.log("it is equal or greater than 50");
// } else {
//   console.log("no condition is true");
// }

// for loop
for (let i = 6; i < 3; i++) {
  console.log(i);
}

// checking for even numbers using loop

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  } else {
    console.log(`${i} is an odd number`);
  }
}
const miles = 0;
while (miles < 5) {
  console.log("miles is : ", +" ", miles);
  miles++;
}

// switch conditional statements

switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  // ... more cases
  default:
  // code to be executed if expression doesn't match any case
}
