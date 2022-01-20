// Напиши скрипт который подсчитывает сумму всех четных чисел в массиве

// Алгоритм

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);

    if (numbers[i] % 2 === 0) {
        console.log('Четное!!!');

        total += numbers[i];

    }

}

console.log('Total: ', total);