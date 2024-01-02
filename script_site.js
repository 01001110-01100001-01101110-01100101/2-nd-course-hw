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


function guessWords() {
    let words = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
    ];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    const answerFirstEl = prompt("Чему равнялся первый элемент массива?");
    const answerLastEl = prompt("Чему равнялся последний элемент массива?");
    if (answerFirstEl.toLowerCase() === words[0].toLowerCase() && answerLastEl.toLowerCase() === words[6].toLowerCase()) {
        alert('Поздравляю! Вы прошли игру!');
    }
    else if (answerFirstEl.toLowerCase() !== words[0].toLowerCase() && answerLastEl.toLowerCase() !== words[6].toLowerCase()) {
        alert('Неверно. Попробуйте снова.');
    }
    else {
        alert('Вы были близки к победе');
    };
}


