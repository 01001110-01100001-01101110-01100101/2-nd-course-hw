const month = (num) => {
    if (num === '1' || num === '2' || num === '12') {
        alert ("Зима");
    } 
    else if (num === '3' || num === '4' || num === '5') {
        alert("Весна");
    } 
    else if (num === '6' || num === '7' || num === '8') {
        alert("Лето");
    } 
    else if (num === '9' || num === '10' || num === '11') {
        alert("Осень");
    }
    else {
        alert("Вы ввели неправильное значение");
    }
};
