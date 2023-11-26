/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/
let random = [1, 'any', -12, true, null, 34, 9, 'dsvd', undefined, 4];
console.log(random);
console.log(random[4]);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
let book1 = {
    title: 'Moonlight',
    pageCount: 345,
    genre:'tragedy'
}
console.log(book1);

let book2 = {
    title: 'Gaming',
    pageCount: 645,
    genre:'comedy'
}
console.log(book2);
let book3 = {
    title: 'My way',
    pageCount: 756,
    genre:'drama'
}
console.log(book3);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
 Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
let book4 = {
    title: 'Stone Island',
    pageCount: 754,
    genre:'comedy',
    authors:['Mary Elise', 34]
}
console.log(book4);
let book5 = {
    title: 'Squid Game',
    pageCount: 554,
    genre:'thriller',
    authors:['Phibi Tonkeans', 54]
}
console.log(book5);
let book6 = {
    title: 'Love in the air',
    pageCount: 594,
    genre:'fiction',
    authors:['Elizabeth Mary Swon', 34]
}
console.log(book6);

/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
 Вивести в консоль пароль кожного користувача*/
let users = [
    {name: 'Olz', username: 'rr1ox', password: 'hjymt5h43r23'},
    {name: 'Arlw', username: 'ar1ow', password: 'mtyjh45t3was'},
    {name: 'Kim', username: 'kIm', password: 'gbhtgt34we'},
    {name: 'Tania', username: 'shrmtn', password: 'vde3t46yhrge'}
    ];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);





/*- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
    Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x = -3;
if (x > 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = 50;
if (time >= 0 && time <= 15) {
    console.log('Перша чверть');
} else if (time >= 16 && time <= 30) {
    console.log('Друга чверть');
}else if (time >= 31 && time <= 45) {
    console.log('Третя чверть');
}else if (time >= 46 && time <=60) {
    console.log('Четверта чверть');
}else{
    console.log('out of time');
}

/*- У змінній day дано якесь число від 1 до 31.
 Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
let day_of_month = 5;
if (day_of_month >=1 && day_of_month >=10){
    console.log('first decade');
} else if (day_of_month >=11 && day_of_month >=20) {
    console.log('second decade');
} else if (day_of_month >=21 && day_of_month >=31) {
    console.log('third decade');
}else{
    console.log('out of days');
}


/*Логічні розгалуження:

- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
    і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.

    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/


