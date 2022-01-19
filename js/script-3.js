// Первая задача
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// Result: ["a", "b", "c", 0, 1, 2, 3];

// const bPart = b.splice(1);
// console.log(bPart);
// console.log(b);
// const result = a.concat(c, b, bPart[0]);
// console.log(result);




// Вторая задача
/// const result = a.splice(3, 3, a[0], a[1], a[2]);
// console.log(a);


// const result = a.copyWithin(3, 0, 3);
// console.log(result);

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];




// Третья задача

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = a.splice(5, 3, 0, 0, 0);
// console.log(a);

// const result = a.fill(0, 5, 8);
// console.log(a);


// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];



// Четвертая задача

// const a = [1, 2, [3, 4], [5, 6], 7];
// const result = a.flat();


// console.log(result);

// let result = [];
// for (const i of a) {
//     if (Array.isArray(i)) {
//     result.push(i[0], i[1]) 
//     } else {
//         result.push(i)
//     }
    
// }
// console.log(result);



// Result: [1, 2, 3, 4, 5, 6, 7]



// Пятая задача

// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k']

// let item;
// for (i = 0; i < a.length; i += 1) {
//     if (a[i] === "n") {
//         item = i;
//     }
// }
// console.log('index last "n": ', item);



// Шестая задача

// const a = [1, 2, 3, 4, 5, 6, 7]

// let b = [];

// for (let i = a.length - 1; i >= 0; i -= 1) {
//     b.push(a[i]);
// }
// console.log(b);


// a.reverse();
// console.log(a);


// Result: [7, 6, 5, 4, 3, 2, 1]



// Седьмая задача

const a = 'alona'
console.log(a.split(""));

// Result: ['a', 'l', 'o', 'n', 'a']



