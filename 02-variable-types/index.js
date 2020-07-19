let userN = +prompt (`Введіть ціле число N`);

while(!Number.isInteger(userN) || userN ===0) {
    userN = +prompt(`Число N не є цілим спробуйте ще раз`); 
}  
console.log('Число N:  ' + userN);

let userM = +prompt (`Введіть ціле число M більше за N`);

while (!Number.isInteger(userM) || (userN > userM) ) {
    (userN > userM) 
        ? userM = +prompt(`Число M є менше N `)
        : userM = +prompt(`Число M не є цілим спробуйте ще раз`)         
}   
console.log('Число M:  ' + userM);


let agreePairValue = confirm('Пропускати парні числа?');
console.log('Пропускати парні?  ' + agreePairValue);


let sumValue = 0;
for (let i = userN; i <= userM; i++) {
    if (agreePairValue && i%2 === 0)  continue;
    sumValue += i; 
}
console.log('Сума чисел:  ' + sumValue);