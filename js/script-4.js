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



const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}