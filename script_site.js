const month = (num) => {
    if (num === '1' || num === '2' || num === '12') {
        console.log("Зима");
    } 
    else if (num === '3' || num === '4' || num === '5') {
        console.log("Весна");
    } 
    else if (num === '6' || num === '7' || num === '8') {
        console.log("Лето");
    } 
    else if (num === '9' || num === '10' || num === '11') {
        console.log("Осень");
    }
    else {
        console.log("Вы ввели неправильное значение");
    }
};
month(prompt("Введите номер месяца"));
