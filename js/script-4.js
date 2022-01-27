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

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const getUsersWithEyeColor = (users, color) => {
//   const arrUsers = users.filter((user) => user.eyeColor === color);
//   return arrUsers;
// };
// console.log(getUsersWithEyeColor(users, "blue"));

// =================================================================
// 26.01.2022

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition.
// But you must calculate only positive numbers and omit negative if any presents.
// For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12

// const positiveSum = (array) => {
//   const newArr = array.filter((item) => item >= 0);
//   return newArr.reduce((acc, arg) => {
//     return acc + arg;
//   }, 0);
// };

// console.log(positiveSum([2, 4, 6, 8])); // => 20
// console.log(positiveSum([0, -3, 5, 7])); // => 12

// const positiveSum = (args) => {
//   return args.reduce((acc, element) => {
//     if (element >= 0) {
//       return acc + element;
//     } else {
//       return acc;
//     }
//   }, 0);
// };

// console.log(positiveSum([2, 4, 6, 8])); // => 20
// console.log(positiveSum([0, -3, 5, 7])); // => 12

//  Написать функцию — letterCount
// Он принимает два строковых аргумента и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.
// Если вхождений не найдено, должно быть возвращено значение 0.
// Например:
// letterCount("Maggy", "g") // => 2
// letterCount("Барри", "b") // => 1
// количество букв("", "z") // => 0

// const letterCount = (string1, string2) => {
//   const firstArray = [...string1.toLowerCase()];
//   const secondString = string2.toLowerCase();
//   const filteredArr = firstArray.flter {
//     ((element) => element === secondString);
// }
//   const result = filteredArr.length;
//   return result;
// };

// letterCount("Maggy", "g"); // => 2
// letterCount("Barry", "b"); // => 1
// letterCount("", "z"); // => 0

// const letterCount = (string1, string2) => {
//   const firstArray = [...string1.toLowerCase()];
//   const secondString = string2.toLowerCase();
//   return firstArray.reduce((total, element) => {
//     if (element === secondString) {
//       return total + 1;
//     }
//     return total;
//   }, 0);
// };

// letterCount("Maggy", "g"); // => 2
// letterCount("Barry", "b"); // => 1
// letterCount("", "z"); // => 0

// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// const countPoints = (array) =>
//   array.reduce((acc, elem) => {
//     if (elem[0] > elem[2]) {
//       return acc + 3;
//     } else if (elem[0] === elem[2]) {
//       return acc + 1;
//     }
//     return acc;
//   }, 0);

// console.log(countPoints(["3:1", "1:0", "0:0", "1:2", "4:0", "2:3", "1:1", "0:1", "2:1", "1:0"])); // => 17
// countPoints(["1:1", "1:2", "2:0", "4:2", "0:1", "2:3", "1:1", "0:1", "1:1", "3:0"]); // => 12

// getSums([1, 2, 3, 4, 5]);

const getSums = (array) => console.log(getSums([1, 2, 3, 4, 5]));
// должна вернуть - [1, 3, 6, 10, 15]
