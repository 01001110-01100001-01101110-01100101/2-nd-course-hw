const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10) {
        console.log(numbers[i]);
        break;
    }
}


const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
    if (num[i] == 4) {
        console.log(i);
        break;
    }
};


let numb = [1, 3, 5, 10, 20];
numb = numb.join('    ');
console.log(numb);


const n = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];


const ns = [1, 1, 1];
ns.push(2, 2, 2);
console.log(ns);


let arr = [9, 8, 7, "a", 6, 5];
arr = arr.sort();
console.log(arr);
arr.pop()
console.log(arr);


const nums = [9, 8, 7, 6, 5];
let guessNums = nums.includes(Number(prompt('Угадайте загаданное число')))
if (guessNums == 1) {
    alert('Угадал');
} else {
    alert('Не угадал');
}


let string = 'abcdef'
const array = Array.from(string);
console.log(array.reverse().join(''));


const first = [
 [1, 2, 3],
 [4, 5, 6],
];
let flat = first.flat()
console.log(flat);


const random = [4, 2, 7, 4, 8, 9, 1]
let sum = 0
for (let index = 0; index < random.length - 1; index++) {
    console.log(random[index] + random[index + 1]);
    
}

/* 11, 12, 13*/