
/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
/*
function squareArea(a, b) {
    let square = a*b;
    console.log(square)
}
squareArea(3,4);
*/

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
/*function circleArea(radius) {
    let areaCircle = Math.pow(radius, 2) *Math.PI;
    console.log(areaCircle);
}
circleArea(4);*/
/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
/*function sylinderrea(r, h) {
    let areaS = 2 * Math.PI * (r * r) + 2 * Math.PI * h * r;
    return areaS;
}
sylinderrea(3, 5);
console.log(sylinderrea(3, 5));*/

/*- створити функцію яка приймає масив та виводить кожен його елемент*/
/*
function arrayM(array) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        console.log('Element:', arrayElement);
    }
}
arrayM([2, 4, 5]);
*/

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
/*
function text(paragraph) {
    document.write(`<p>${paragraph}</p>`)
}
text('hey there');
*/

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
/*function ulText(textUl) {
    document.write(`
        <ul>
            <li>${textUl}</li>
            <li>${textUl}</li>
            <li>${textUl}</li>
        </ul>
    `)
}
ulText('oh');*/
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
/*
function textUl(rText, sizeLi) {
    document.write(`<ul>`);
    for (let i = 0; i < sizeLi; i++) {
        document.write(`<li>${rText}</li>`);
    }
    document.write(`</ul>`)
}
textUl('line', 3);
*/

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
та будує для них список*/

/*
function arrayList(array) {
    document.write(`<ul>`);
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`);
}
arrayList([1, undefined, 'like', 4]);
*/

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
та виводить їх в документ. Для кожного об'єкту окремий блок.*/
/*
let person = [
    {id: 1, name: 'Olz', age: 23},
    {id: 1, name: 'Ol', age: 22}
];
function arrObj(arr) {
    for (const arrElement of arr) {
        document.write(`<p>${arrElement.id} ${arrElement.name} ${arrElement.age}</p>`);
    }
}
arrObj(person);
*/

/*- створити функцію яка повертає найменьше число з масиву*/
function minN(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        const minElement = array[i];
        if (minElement < min){
            min = minElement;
        }
    }
    console.log(min);
}
minN([0, 1, 4]);

/*- створити функцію sum(arr)яка приймає масив чисел,
сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/

function sumN(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        sum+=arrayElement;
    }
    console.log(sum);
}
sumN([1, 2, 3]);

/*- створити функцію swap(arr,index1,index2).
Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
function swap(array, index1, index2) {
    let num = array[index1];
    array[index1] = array[index2];
    array[index2] = num;
    console.log(array);
}
swap([11, 22, 33, 44], 0,1);

/*
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
function exchange(sumUAH,currencyValues,exchangeCurrency){

}

exchange(123, 45, 39);