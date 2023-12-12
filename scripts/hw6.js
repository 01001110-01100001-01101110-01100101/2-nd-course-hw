//1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10) {
        console.log(numbers[i]);
        break;
    }
}

//2
const num = [1, 5, 4, 10, 0, 3];
console.log(num.indexOf(4));
/* for (let i = 0; i < num.length; i++) {
    if (num[i] == 4) {
        console.log(i);
        break;
    }
};*/

//3
let numb = [1, 3, 5, 10, 20];
numb = numb.join('    ');
console.log(numb);

//4
let N = [];
for (let i = 0; i < 3; i++) {
    let n = [];
    for (let j = 0; j < 3; j++) {
        n.push(1);
    }
    N.push(n);
}
console.log(N);

//5
const ns = [1, 1, 1];
ns.push(2, 2, 2);
console.log(ns);

//6
let arr = [9, 8, 7, "a", 6, 5];
arr.sort((a, b) => a - b).pop()
console.log(arr);

//7
const nums = [9, 8, 7, 6, 5];
let guessNums = nums.includes(Number(prompt('Угадайте загаданное число')))
if (guessNums == 1) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//8
let string = 'abcdef'
const array = Array.from(string);
console.log(array.reverse().join(''));

//9
const first = [
 [1, 2, 3],
 [4, 5, 6],
];
let flat = first.flat();
console.log(flat);

//10
const random = [4, 2, 7, 4, 8, 9, 1]
for (let index = 0; index < random.length - 1; index++) {
    console.log(random[index] + random[index + 1]);
    
}

//11
const z = [45, 3, 50, -12, 0];
function zSquared(z) {
    return z.map((el) => el * el);
}
console.log(zSquared(z));

//12
const words = ['слово', '', 'слог', 'длинное предложение', 'буква']; 
function wordsLenght(words) {
    return words.map((word) => word.length)
}
console.log(wordsLenght(words));
    

function filterPositive(array) {
    const neg = []; //кладём массив внутрь функции
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {   // проверяем каждый элемент
        neg.push(array[i]); // не забываем прописывать, что именно мы пушим
    }
    }
    return neg; // и возвращаем отсюда массив
}
console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10] // консолим, чтобы увидеть результат