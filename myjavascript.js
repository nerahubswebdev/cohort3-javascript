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

// const area = (b * h) / 2;

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

// const totalSavings = people.reduce((sum, person) => sum + person.savings, 0);
// console.log("total savings of all: ", totalSavings);

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
let miles = 0;
while (miles < 5) {
  console.log("miles is : ", +" ", miles);
  miles++;
}

// switch conditional statements

// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
//     // code to be executed if expression === value2
//     break;
//   // ... more cases
//   default:
//   // code to be executed if expression doesn't match any case
// }

// let fruit = "3";

// switch (fruit) {
//   case 3:
//     console.log("this is not the value");

//     break;
//   case "3":
//     console.log("this is the value");
//     break;

//   default:
//     console.log("i dont think fruit matches");

//     break;
// }

// let category = "fruit";
// let item = "banana";

// switch (category) {
//   case "fruit":
//     switch (item) {
//       case "banana":
//         console.log("You selected a banana.");
//         break;
//       case "apple":
//         console.log("You selected an apple.");
//         break;
//       default:
//         console.log("Unknown fruit.");
//     }
//     break;
//   case "vegetable":
//     console.log("You selected a vegetable.");
//     break;
//   default:
//     console.log("Unknown category.");
// }

// functions

// function functionName(parameters) {
//   // code to be executed
//   return value; // optional
// }
// Example:

function add(a, b) {
  const result = a + b;
  console.log("addition result = ", result);
}

add(5, 6);
add(67, 6);
add(5, 69);
add(5, 65);
add(56, 6);
add(55, 67);

function welcome_message() {
  console.log("welcome to javascript function");
}

welcome_message();

// function area(a, b) {
//   const result = (a * b) / 2;
//   // console.log("addition result = ", result);
//   return result;
// }

// console.log("the rsult of the fxn is : ", area(5, 6));

// const area_data = area(6, 6);

// const new_cal = area_data + 5;

// console.log("new calc data = ", new_cal);

// const area_data2 = area(9, 6);

// const new_cal2 = area_data2 * (5 / 2);

// console.log("new calc data = ", new_cal2);

// area(67, 6);
// area(5, 69);
// area(5, 65);
// area(56, 6);
// area(55, 67);

function calculate(a, b, opreation) {
  const calc_expression = `${a} ${opreation} ${b}`;
  const result = eval(calc_expression);

  console.log(`${calc_expression} = `, result);
}

calculate(4, 5, "+");

const add2 = (a, b) => a + b;

console.log(add2(7, 7));

const add3 = (a, b) => {
  const sum = a + b;
  return sum;
};

add3(7, 7);

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

const totalSavings2 = people.reduce((sum, person) => sum + person.savings, 0);
console.log("total savings of all: ", totalSavings2);

const numbers2 = [1, 2, 3, 4];
const sum3 = numbers2.reduce((acc, current) => acc + current, 0);

const filtereddata = numbers2.filter((num) => num > 2);
const filteredpeople = people.filter((person) => person.voted === false);
const filteredpeopleage = people.filter((person) => person.age >= 30);

console.log(filtereddata);

const bonus = people.map((person) => person.savings + 1000);

const bonusme = people.map((person) => ({
  ...person,
  savings: person.savings + 1000,
  myown: person.savings + 5000,
}));

const addme = (a, b) => a + b;

console.log("direct sum = ", addme(7, 5));

// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// console.log("input sum = ", addme(number1, numbers2));

// // Function to get the day of the week
// function getDayOfWeek(dayNumber) {
//   let day;

//   switch (dayNumber) {
//     case 1:
//       day = "Sunday";
//       break;
//     case 2:
//       day = "Monday";
//       break;
//     case 3:
//       day = "Tuesday";
//       break;
//     case 4:
//       day = "Wednesday";
//       break;
//     case 5:
//       day = "Thursday";
//       break;
//     case 6:
//       day = "Friday";
//       break;
//     case 7:
//       day = "Saturday";
//       break;
//     default:
//       day = "Invalid day number";
//       break;
//   }

//   return day;
// }

// Example usage
// const dayNumber = 3; // Change this value to test different cases
// const dayOfWeek = getDayOfWeek(dayNumber);

// console.log(`The day corresponding to ${dayNumber} is ${dayOfWeek}`);

// function promises

let promise = new Promise(function (resolve, reject) {
  //do something
});

let count = 5 + 5 === 11;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});

console.log("the count value = ", countValue);

// using the .then method

let countValue2 = new Promise(function (resolve, reject) {
  if (5 % 2 === 0) {
    resolve({
      name: "Hannah",
      location: "Boston",
      age: 35,
      savings: 30000,
      voted: false,
    });
  } else {
    reject({
      success: false,
      message: "the condition failed",
    });
  }
});

console.log("without the dot then", countValue2);

countValue2
  .then((myresult) => {
    const nnn = myresult;
    console.log("the new result ", myresult.location);
  })
  .catch((error) => {
    console.log("the error is : ", error);
  });

// tey ... catch

let countValue3 = new Promise(function (resolve, reject) {
  const me = {
    name: "Hannah",
    location: "Boston",
    age: 35,
    savings: 30000,
    voted: false,
    type: "try catch",
  };
  if (7 - 2 === 3) {
    resolve(me);
  } else {
    reject({
      success: false,
      message: "the condition failed from try catch",
    });
  }
});

async function handlePromise() {
  try {
    // the try body holds the resolve of the promise
    const countvalue3result = await countValue3;
    console.log("the new result from try catch ", countvalue3result);
  } catch (error) {
    // the catch body holds the reject of the promise
    console.log("the new error result from try catch", error);
  }
}
handlePromise();

// https://fakestoreapi.com/products

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      if (2 + 2 === 4) {
        resolve({
          name: "Ian",
          location: "Atlanta",
          age: 27,
          savings: 7000,
          voted: true,
          message: 3,
        });
      } else {
        reject({
          success: false,
          message: "the api sample failed",
        });
      }
    }, 3000);
  });
}

async function fetchmydata() {
  try {
    console.log("Fetching data .....");
    const response = await fetchDataFromAPI();
    // console.log("the bare response : ", response);
    const savings = response.savings;
    // console.log("the savings : ", savings);
    return response;
  } catch (error) {
    console.log("the new error my data from try catch", error);
  }
}

fetchmydata()
  .then((result) => {
    console.log("the result = > ", result);
    const sum = result.age + result.message;

    console.log("the sum ", sum);
  })
  .catch((error) => {
    console.log("the then from try catch", error);
  });

async function fetchmydata2() {
  try {
    console.log("Fetching data .....");
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log("the bare response : ", response);
    return response.json();
  } catch (error) {
    console.log("the new error my data from try catch", error);
  }
}

fetchmydata2()
  .then((result) => {
    console.log("the result = > ", result);
    const bonus = result.map((p) => p.title);
    const sum3 = result.reduce((acc, current) => acc + current.price, 0);
    const sum4 = result.reduce((acc, current) => acc + current.rating.count, 0);

    console.log(bonus);

    console.log("total price ", sum3);
    console.log("total count ", sum4);
  })
  .catch((error) => {
    console.log("the then from try catch", error);
  });

//https://cohort2-project-server.onrender.com/job/all-jobs

// new api call
async function fetchmydata3() {
  try {
    console.log("Fetching data .....");
    const response = await fetch(
      "https://cohort2-project-server.onrender.com/job/all-jobs"
    );
    // console.log("the bare response : ", response);
    return response.json();
  } catch (error) {
    console.log("the new error my data from try catch", error);
  }
}

fetchmydata3()
  .then((result) => {
    console.log("the result = > ", result);

    const filteredjobs = result?.jobs?.filter(
      (job) => job.experiencelevel >= 3
    );
  })
  .catch((error) => {
    console.log("the then from try catch", error);
  });

// combining all apis

async function combinedApiCall() {
  try {
    const [data1, data2] = await Promise.all([
      fetch("https://fakestoreapi.com/products").then((result) =>
        result.json()
      ),
      fetch("https://cohort2-project-server.onrender.com/job/all-jobs").then(
        (result2) => result2.json()
      ),
    ]);

    // console.log("fake api :", data1);
    // console.log("my api :", data2);

    return { data1, data2 };
  } catch (error) {
    console.log("the then from try catch", error);
  }
}

combinedApiCall()
  .then((result) => {
    console.log("the data results :", result);

    const newFake = result?.data1.slice(0, 13);
    console.log("the new fake => ", newFake);
    const jobdata = result.data2.jobs;
  })
  .catch((error) => {
    console.log(error);
  });
