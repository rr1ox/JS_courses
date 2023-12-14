/*ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
let rettangleArea = (a, b) => a*b;
console.log(rettangleArea(3, 4));

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
/*
let circleArea =  (r) => Math.pow(r,2) * Math.PI;
let result = circleArea(4);
console.log(result);
*/

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
/*
let cilinderArea = (h, radius) =>  2 * Math.PI * Math.pow(radius, 2) + 2 * Math.PI * h * radius;
let cilinder = cilinderArea(7,3);
console.log(cilinder);
*/

/*- створити функцію яка приймає масив та виводить кожен його елемент*/
/*
let randomArray = (array) =>{
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        console.log(arrayElement);
    }
}
randomArray([3, 4,5]);
*/

/*- створити функцію яка створює параграф з текстом.
Текст задати через аргумент*/
/*
let paragraph = (text) => {
    document.write(`<p>${text}</p>`)
}
paragraph('lalala');
*/

/*- створити функцію яка створює ul з трьома елементами li.
Текст li задати через аргумент всім однаковий*/
/*
let ulList = (liText) =>{
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);

}
ulList('bvc');
*/

/*- створити функцію яка створює ul з трьома елементами li.
Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом,
який є числовим (тут використовувати цикл)*/
/*
let listUl = (textLi, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
}
listUl('tetete', 5);
*/

/*- створити функцію яка приймає масив примітивних елементів
 (числа,стрінги,булеві), та будує для них список*/
/*let arrayList = (array) => {
    document.write(`<ol>`);
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<li>${arrayElement}</li>`)

    }
    document.write(`</ol>`);
}
arrayList([3, 'text', true]);*/
/*- створити функцію яка приймає масив об'єктів з
наступними полями id,name,age , та виводить їх в документ.
 Для кожного об'єкту окремий блок.*/


/*let idk = [
    {id: 1,
    name: 'Olz',
    age: 23}];
let arrayObj = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
arrayObj(idk);*/

/*- створити функцію яка повертає найменьше число з масиву*/

let min = (minNum) => {
    let minO = minNum[0];
    for (let i = 0; i < minNum.length; i++) {
        const minOElement = minNum[i];
        if (minOElement < minO) {
            minO = minOElement;
        }

    }
    console.log(minO);
}
min([1, 5, 7]);

/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву
 та повертає його. Приклад sum([1,2,10]) //->13*/

let summ = (arrayOfSum) => {
    let count = 0;
    for (let i = 0; i < arrayOfSum.length; i++) {
        let arrayOfSumElement = arrayOfSum[i];
        count+=arrayOfSumElement;
    }
    console.log(count);
}
summ([1, 3, 4]);

/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

let swap = (arrSwap, index1, index2) => {
    let num = arrSwap[index1];
    arrSwap[index1] = arrSwap[index2];
    arrSwap[index2] = num;
    console.log(arrSwap);
}

swap([11,22,33,44],0,1);

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/
