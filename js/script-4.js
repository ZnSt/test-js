// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321
// -12345
// -54321

// const param = -12345;
// function reverseNumber(param) {

// // Преобразуем число в строку
// const paramStr = param.toString();

// console.log(param);
// console.log(paramStr);
// // Применяем метод split()

// const arrParam = paramStr.split('');
// const reverseArr = [];

// if (arrParam[0] === '-') {

//  for (let i = arrParam.length; i >= 1; i -= 1) {
//     reverseArr.push(arrParam[i]);
//         }
//     console.log(reverseArr);

// }
//     const newStr = reverseArr.toString();

//     const newNumber = Number('-' + newStr.replaceAll(',', ''));
//     console.log(newNumber);
//     return newNumber;
// }

// reverseNumber(param);

// // Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// // It should return an array of converted values.

// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// function convertArgument(...args) {
//     const newArray = [];
//     for (let arg of args) {
//         if (typeof arg === 'string') {
//             arg = Number(arg);
//             newArray.push(arg)
//         }
//     } else {
//         newArray.push(String(arg))
//     }

//     return args;
// }
// console.log(convertArgument('1', 2, 3, '4'));

// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped

// function findLongestWord(string) {
//     const words = string.split();
//     let result = words[0];

//     for (let i = 0; i < words.length; i += 1) {
//         if (words[i].length > result.length) {
//             result = words[i]
//         }
//     }

//     return result;
// }

// написать функцию которая будет принмаит объект и будет возвращать

// function getKeys(object) {
//     const mas = [];
//     for (const key in object) {

//         if (object.hasOwnProperty(key)) {
//              mas.push(key);
//         }
//     }
//     return mas;
// }

// console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }))

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// console.log(getKeys(book))

// const java = "Java script is awesome!";
// const result = java.toUpperCase();
// console.log(result);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split("т")); // ["JavaScript", "это", "интересно"]

// function slugify(title) {
//   // Change code below this line
// let result = title.split(" ");
// let slug = result.join("-").toLowerCase();

//   // Change code above this line
//   return slug;

// }

// console.log(slugify("Arrays for begginers"));

// function generateStatus() {
//     const mathZ = Math.random();
//     // console.log(mathZ);
//     if (mathZ <= 0.5) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // console.log(generateStatus());
// console.log(generateStatus());
// console.log(generateStatus());
// console.log(generateStatus());
// console.log(generateStatus());

// function newArray(users) {
//     const arrCopy = [];
//     for (const user of users) {
//         const object = {...user};
//         object.vip = generateStatus();
//         object.skills = 'no information';
//         arrCopy.push(object);
//     }

//     return arrCopy;
// }
// console.log(newArray(users));
// console.log(users);

// Напишите функцию, которая перебирает массив и
// выполняет функцию для каждого элемента.

// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6

// function executeforEach(array, callback) {
//   for (let item of array) {

//     callback(item)
//   }

// }

// Напишите функцию, которая проверяет,
// содержит ли массив аргумент,
// переданный в качестве значения параметра,
// и возвращает true в этом случае.

// const containsValue = (array, value) => {
//   let a = false;
//   array.forEach((item) => {
//     if (item === value) {
//       a = true;
//     }
//   });
//   return a;
// };
// console.log(containsValue([2, 5, 8], 2)); // returns true
// console.log(containsValue([12, 4, 6], 5)); // returns false

// Write function substitute() that accepts an array of numbers and manage to replace all
// numbers lower than 20 and greater than 10
// // with '*'. It should return a new array with numbers and '*' instead of these numbers.

// substitute([58, 14, 48, 12, 31, 19, 10]);
// returns [58, '*', 48, '*', 31, '*', 10]

// ==========================================================

// ЦИКЛ for.EACH

// const substitute = (array) => {
//   const newarray = [];
//   array.forEach((element) => {
//     if (element > 10 && element < 20) {
//       newarray.push("*");
//     } else {
//       newarray.push(element);
//     }
//   });
//   console.log(newarray);
// };

// substitute([58, 14, 48, 12, 31, 19, 10]);

// ========================================================

// МЕТОД MAP

// const substitute = (array) => {
//   return array.map((element) => {
//     if (element > 10 && element < 20) {
//       return "*";
//     }
//     return element;
//   });
// };
// console.log(substitute([58, 14, 48, 12, 31, 19, 10]));

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const getUsersWithEyeColor = (users, color) => {
  const arrUsers = users.filter((user) => user.eyeColor === color);
  return arrUsers;
};
console.log(getUsersWithEyeColor(users, "blue"));
