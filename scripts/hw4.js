let word = 'Привет';
for (let index = 0; index < 2; index++) {
    console.log(word);
}


let number = 1
while (number<6) {
    console.log(number);
    number++
};


let num = 7
while (num<23) {
    console.log(num);
    num++
};


const user = {
    '200': "Коля",
    '300': "Вася",
    '400': "Петя",

};
for (key in user) {
    if (user[key]) {
        console.log(`${user[key]} - зарплата ${key} долларов`);
    }
};



let n = 1000;
let i = 0;
while (n > 50) {
    n /= 2
    i++
}
console.log(n, i);


let friday = 3;
for (day = friday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}