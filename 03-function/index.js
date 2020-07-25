//1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(number) {
    newNumber = number.toString().split(``);
    return Math.max(...newNumber);
}
console.log(`value 1236 answer: `+ getMaxDigit(1236));
console.log(`value 987 answer: `+ getMaxDigit(987));
console.log(`value 385 answer: `+ getMaxDigit(385));

// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function stepNumber(value,pow) {
    let result = 1;
        for(let i = 1; i <= pow; i++) {
        result *= value;
        }
    return result;
}
console.log(`Number in pow is equal to: ` + stepNumber(2,13));

// 3.Створити функцію, яка форматує ім'я, роблячи першу букву великою.
function formatedName(name) {
    const newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return newName;
  }
console.log(`Name has been formated: ` + formatedName('bOHdaN'));

//4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
function taxOfSalary(salary, tax) {
    const taxMoney = salary * tax / 100;
    const yourSalary = salary - taxMoney;
    return yourSalary;
}
console.log('Your salary after tax:  ' + taxOfSalary(1000, 19.5));

//5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад:
function getRandomNumber(N, M) {
    return Math.floor(Math.random() * (M - N + 1) + N);
}
console.log('Random value in the range of N to M: ' + getRandomNumber(1,10));

//6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові
function countLetter(letter, symbol) {
    let counter = 0;
    letter = letter.toLowerCase();
    symbol = symbol.toLowerCase();
        for (i = 0; i < letter.length; i++){
            if (symbol === letter[i]) {
            counter ++;
             }
    }
    return counter;
}
console.log('This symbol repeated: ' + countLetter('Асталавіста', 'а'));

//7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
function convertCurrency(money) {
    const rateOne = 27.65;
    const rateTwo = 27.95;
    
    if(money.includes(`$`)){
        result = (parseInt(money) * rateOne) + `UAH`;
        } else if (money.toUpperCase().includes(`UAH`)){
            result = (parseInt(money) / rateTwo).toFixed(2) + `$`;
            } else {
                result = `Enter the correct currency`;
    }
    return result;
}
console.log(`Convert from $ to UAH: ` + convertCurrency('100$'));
console.log(`Convert from UAH to $: ` + convertCurrency('2765uah'));
console.log(`Convert another currency: ` + convertCurrency('253Ron'));

//8.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
function getRandomPassword (password){
    let randomPassword = "";
    for (i = 0; i < password; i++) {
        randomPassword += Math.floor(Math.random()*10);
    }
 return randomPassword;
}
console.log('Random password is: ' + getRandomPassword(8));

//9. Створіть функцію, яка видаляє всі букви з речення. Приклад
function deleteLetters(word, symbol) {
    let newWord = "";
    for (i =0; i < word.length; i++) {
        if (word[i] !== symbol.toLowerCase()) {
        newWord += word[i];
        }
    }
    return newWord;
}
console.log(`Symbol (a) was deleted: `+ deleteLetters("blablabla", 'a'));

//10. Створіть функцію, яка перевіряє, чи є слово паліндромом.
function isPalyndrom(word) {
    const fixedWord = word.toLowerCase().replace(/\s/g, ``);
    const checkPalyndrom = fixedWord.split(``).reverse().join(``);
    return checkPalyndrom === fixedWord;
}
console.log('Is a polyndrome a word (мадам): ' + isPalyndrom("мадам"));
console.log('Is a polyndrome a word (кокос): ' +  isPalyndrom("кокос"));
console.log('Is a polyndrome a word (Я несу гусеня): ' +  isPalyndrom("Я несу гусеня"));

//11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
function deleteDuplicateLetter(phrase) {
    phrase = phrase.toLowerCase();
    let newPharse = "";
    for (i =0; i < phrase.length; i++) {
        if (phrase.lastIndexOf(phrase[i]) === phrase.indexOf(phrase[i])) {
            newPharse += phrase[i];
        }
    }
    return newPharse;
}
console.log('Dublicate symbols was deleted: ' + deleteDuplicateLetter("Бісквіт був дуже ніжним"));

document.writeln (` Function №1 Max value index in this number is: ${getMaxDigit(1236) }<br>
Function №2 Number in pow is equal to: ${stepNumber(2,13)}<br>
Function №3 Name has been formated: ${formatedName('bOHdaN')}<br>
Function №4 Your salary after tax: ${taxOfSalary(1000, 19.5)}<br>
Function №5 Random value in the range of N to M: ${getRandomNumber(1,10)}<br>
Function №6 This symbol repeated: ${countLetter('Асталавіста', 'а')}<br>
Function №7 Convert from UAH to $: ${convertCurrency('2765uah')}<br>
Function №8 Random password is: ${getRandomPassword(8)}<br>
Function №9 Symbol (a) was deleted: ${deleteLetters("blablabla", 'a')}<br>
Function №10 Is a polyndrome a word (Я несу гусеня): ${isPalyndrom("Я несу гусеня")}<br>
Function №11 Dublicate symbols was deleted: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}
`)