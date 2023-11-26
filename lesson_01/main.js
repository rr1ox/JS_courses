/*Створити змінні. Присвоїти кожному з них значення:
'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log*/
/*
let hello = 'hello';
console.log(hello);

let a='owu';
console.log(a);

let b = 'com';
console.log(b);

let c = 'ua';
console.log(c);

let num = 1;
console.log(num);

let num_2 = 10;
console.log(num_2);

let num_3 = -999;
console.log(num_3);

let other_num = 123;
console.log(other_num);

let Pi = 3.14;
console.log(Pi);

let decimal = 2.7;
console.log(decimal);

let r = 16;
console.log(r);

let bool_1 = false;
console.log(bool_1);

let bool_2 = true;
console.log(bool_2);
*/
/*- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
 З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)*/

let firstName = 'Olha';
let middleName = 'Maria';
let lastName = 'Znakharuk';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;*/
let a = 100;
let b = '100';
let c = true;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

/*-
Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими
 Імям, По-Батькові та роками. та вивести в консоль
*/

let name1= prompt('What is your name?','');
alert('Hello '+name1+'!');

let surname1 = prompt('What is your surname?','');
alert('Hello '+surname1+'!');

let age1 = +prompt('What is your age?','');
alert('Hello '+age1+'!');
