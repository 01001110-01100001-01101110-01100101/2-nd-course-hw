let password = 'пароль';
let answer = prompt('Введите пароль');
if (password === answer) {
    console.log('Пароль введен верно');
} else {
    console.log("Пароль введен неправильно");
};

let number = prompt('Введите число');
if (number > 0 && number < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
};

let d = 298;
let e = 985;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
};

let a = "2";
let b = "3";
alert(Number(a) + Number(b));

let month = Number(prompt('Введите номер месяца'));
switch (month) {
    case 1 :
      console.log('Зима');
      break;
    case 2 :
      console.log('Зима');
      break;
    case 12 :
      console.log('Зима');
      break;
    case 3 :
      console.log('Весна');
      break;
    case 4 :
      console.log('Весна');
      break;
    case 5 :
      console.log('Весна');
      break;
    case 6 :
      console.log('Лето');
      break;
    case 7 :
      console.log('Лето');
      break;
    case 8:
      console.log('Лето');
      break;
    case 9 :
      console.log('Осень');
      break;
    case 10 :
      console.log('Осень');
      break;
    case 11:
      console.log('Осень');
      break;
    default:
        console.log('В году 12 месяцев');
        break;
}

