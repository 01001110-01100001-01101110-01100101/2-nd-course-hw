//Задание 1
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 0;
// }));

// Задание 2
// function isPositive(number) {
//     return number > 0;
// }
// function isMale(el) {
//     return el.gender == 'male';
// }
// function filter(arr, ruleFunction) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (ruleFunction(arr[i])) {
//             output.push(arr[i]);
//         }        
//     }
//     return output;
// }

// console.log(filter([3, -4, 1, 9], isPositive)); 

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale)); 

// Задание 3 
// const date = (Date) => {
//     let currentDate = new Date();
//     let interval = setInterval(() => console.log(currentDate), 3000);
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log("30 секунд прошло!");
//     }, 30000);
// }

// Задание 4
function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    callback();
}

delayForSecond(function () {
    console.log("Привет, Глеб!");
});





// Задание 5



// const timer = (deadline) => {
//     if (isNaN(+deadline)) {
//         // + − приводим значение к number, если это NaN,
//         console.log("Передано некорректное число"); // выводим сообщение
//         return; // выходим из функции
//     }
    
//     let time = deadline;
//     console.log(time);
//     const interval = setInterval(() => {
//         time -= 1;
//         console.log(time);
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log("Время истекло!");
//     }, deadline * 1000);
// };

// const deadline = prompt("На сколько секунд вы хотите поставить таймер?");
// timer(deadline);
