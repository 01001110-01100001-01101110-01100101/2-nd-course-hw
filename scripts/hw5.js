/* Задание 1 */
const min = (a, b) => {
    (a <= b) ? console.log(a) : console.log(b);
};
min (8, 4);
min (6, 6);

/* Задание 2 */
function num(a) {
    if (a % 2 === 0) {
        console.log(`Четное число`);
    } else {
        console.log(`Нечетное число`);
    }
};
num (5);
num (48);

/* Задание 3 */
const square = (a) => {
    console.log(a ** 2);
};

function sq(a) {
    return a ** 2
}
square(6);
console.log(sq(5)); 

/* Задание 4 */
let name 
const sayHello = (name) => {
    if (name > 0 && name < 13) {
        console.log('Привет, друг');
    }
    else if (name >= 13) {
        console.log('Добро пожаловать!');
    } 
    else {
        console.log('Вы ввели неправильное значение');
    }
}
sayHello(prompt('Сколько вам лет'))

/* Задание 5 */
const mult = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        console.log("Одно или оба значения не являются числом"); ;
    }
    else {
        console.log(a * b);
    }
};
mult(prompt("Введите первое число"), prompt ("Введите второй число"));

/* Задание 6 */
const cube = (a) => {
    if (isNaN(a)) {
        console.log("Значение не является числом");
    } else {
        console.log(`${a} в кубе равняется ${a * a * a}`);
    }
};
cube(prompt("Введите число"));

/* Задание 7 */
const circle1 = {
    radius: 3,
    getArea() {
        return `Площадь круга 1 равна ${this.radius * this.radius * 3.14}.`;
    },
    getPerimeter() {
        return `Периметр круга 1 равен ${this.radius * 2 * 3.14}.`;
    }
};

const circle2 = {
    radius: 8,
    getArea() {
        return `Площадь круга 2 равна ${this.radius * this.radius * 3.14}.`;
    },
    getPerimeter() {
        return `Периметр круга 2 равен ${this.radius * 2 * 3.14}.`;
    },
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());