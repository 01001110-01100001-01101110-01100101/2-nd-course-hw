let a = 10;
alert(a);
a = 20;
alert(a);

const releaseYear = 2007;
alert(`Первой iPhone был выпущен в ${releaseYear} году`);

let creatorsName = "Brendan Eich";
alert(`Создателем языка JavaScript является ${creatorsName}`);

let x = 10;
let y = 2;
alert(`10 + 2 = ${x + y}`);
alert(`10 - 2 = ${x - y}`);
alert(`10 * 2 = ${x * y}`);
alert(`10 / 2 = ${x / y}`);

let result = y ** 5;
alert(`2 в степени 5 равно ${result}`);

a = 9;
let b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = ++num;
num = --num;
alert(num);

let age = Number(prompt("Сколько вам лет?"));
alert(age);

const user = {
 name: "Lary",
 age: 35,
 isAdmin: true,
};
user.cityOfResidence = "Moscow";
user["age"] = 36;
delete user["sityOfResidence"];
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user[info]);

let name = prompt("Введите свое имя:)");
alert(`Привет, ${name}!`);\