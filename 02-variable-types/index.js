let userN = prompt (`Введіть ціле число N`);
let N = parseInt(userN);

while(N != userN || isNaN(N)){
    alert('Це не число');
    userN = prompt(`Введіть ціле число N`);
    N = parseInt(userN);   
}   
console.log('Число N:  ' + N);

let userM = prompt (`Введіть ціле число M більше за ${N}`);
let M = parseInt(userM);

while (M != userM || (N > M) || isNaN(M)) {
    (N > M) 
        ? userM = prompt(`Число M є менше N ${N}`)
        : userM = prompt(`Число M не є цілим спробуйте ще раз`);
        M = parseInt(userM);
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
