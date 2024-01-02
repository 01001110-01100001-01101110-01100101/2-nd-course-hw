//Задание 1
const word = "js"
console.log(word.toUpperCase());


//Задание 2
function searchStart(array, string) {
    return array.filter((element) =>
    element.toLowerCase().startsWith(string.toLowerCase())
    );
}

console.log(searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
console.log(searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"));
console.log(searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"));


//Задание 3
const number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));


//Задание 4
const arr = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...arr)); // ... оператор расширения
console.log(Math.max(...arr));


//Задание 5
function getRandom() {
    return Math.round(Math.random() * 10)
}
console.log(getRandom());


//Задание 6
function getRandomArrNumbers(minValue, maxValue) {
    const arrayRandom = [];
    const numbersOfElements = Math.floor(maxValue / 2);
    while (arrayRandom.length < numbersOfElements) {
        arrayRandom.push(
            Math.round(Math.random() * (maxValue - minValue) + minValue)
        );
    }
    return arrayRandom;
};
console.log(getRandomArrNumbers(0, 7));
console.log(getRandomArrNumbers(0, 12));


//Задание 7
function getRandomNumbers(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}
console.log(getRandomNumbers(6, 17));


//Задание 8
const date = new Date();
console.log(date);


//Задание 9
const currentDate = new Date()
let futureDate = currentDate
futureDate.setDate(currentDate.getDate()+ 73);
console.log(futureDate.toDateString());


//Задание 10
const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); 
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()]; 

console.log(fullDate); 