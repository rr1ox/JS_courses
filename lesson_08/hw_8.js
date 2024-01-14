
/* Створити функцію конструктор для об'єктів User
 з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let users = [
    new User(1, 'derek', 'brown', 'ffcmk@gmail.com', '+380876543'),
    new User(4, 'eren', 'rown', 'hgfdk@gmail.com', '+38089876543'),
    new User(3, 'sean', 'own', 'gvfccmk@gmail.com', '+3809876543'),
    new User(2, 'colin', 'now', 'hgfdk@gmail.com', '+3808987654'),
];

/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
залишивши тільки об'єкти з парними id (filter)*/

let filteredArray = users.filter((user) => user.id % 2 ===0);
console.log(filteredArray);

/*- Взяти масив з  User[] з попереднього завдання,
та відсортувати його по id. по зростанню (sort)*/

let sortedUser =
    users.sort((a, b) => {
        return a.id - b.id;
    })
console.log(sortedUser);

/*- створити класс для об'єктів Client з полями id, name, surname ,
email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
*/

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;

    }
}
let clients = [
    new Client(3, 'phibi', 'tomson', 'ngf@gmail.com',
        '+38065436543', ['bag']),
    new Client(5, 'bi', 'omson', 'ngf@gmail.com',
        '+38065436543', ['phone', 'bag']),
    new Client(1, 'tom', 'son', 'ngf@gmail.com',
        '+38065436543', ['phone', 'bag', 'car']),
    new Client(2, 'seven', 'ton', 'ngf@gmail.com',
        '+38065436543', ['phone','burger', 'bag', 'drink']),
    new Client(4, 'olz', 'r1oxx', 'ngf@gmail.com',
        '+38065436543', ['phone', 'bag', 'ham'])

];

/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його
по кількості товарів в полі order по зростанню. (sort)*/
let sortedClient = clients.sort((a, b) => {
    return b.order.length - a.order.length;
})
console.log(sortedClient);

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car,
 з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

*/

function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log('------------ INFO CLASS ------------');
        console.log('model:', this.model);
        console.log('producer:', this.producer);
        console.log('year:', this.year);
        console.log('maxSpeed:', this.maxSpeed);
        console.log('engineVolume:', this.engineVolume);
        console.log('driver', this.driver);

    }
   this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
   this.addDriver = function (driver) {
        this.driver = driver;
   }
}

//const car = new Car('A8', 'Audi', 2023, 240, 4.2);
// car.drive();
// car.addDriver({name: 'Seven', age: 27, exp: 2});
// car.info();
// car.increaseMaxSpeed(15);
// car.info();
// car.changeYear(2024);
// car.info();



/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями
 модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/

class Cars {
    constructor(model, producer, year, maxSpeed, engineVolume,) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log('------------ INFO CLASS ------------')
        console.log('model : ', this.model);
        console.log('producer : ', this.producer);
        console.log('year : ', this.year);
        console.log('maxSpeed : ', this.maxSpeed);
        console.log('volume : ', this.engineVolume);
        console.log('driver : ', this.driver);
        console.log('------------ INFO CLASS ------------')
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
// let cars = new Cars('Mustang', 'Ford', 2017, 260, 2.4);
// cars.increaseMaxSpeed(15);
// cars.info();
// cars.changeYear(2023);
// cars.addDriver({name: 'Killian', age: 24, exp: 3});
// cars.info();

/* -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

class Human{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Human{
    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }

}
let princess = [
    new Cinderella('Ella', 18, 37),
    new Cinderella('Amalla', 27, 38),
    new Cinderella('Lia', 19, 35)

];

class Prince extends Human {
    constructor(name, age, lostShoeSize) {
        super(name, age);
        this.lostShoeSize = lostShoeSize;
    }
    findCind(arr) {
        for (const cinderella of arr) {
            if (cinderella.shoeSize === this.lostShoeSize) {
                console.log('cinderella: ', cinderella);
            }

        }
    }

}










