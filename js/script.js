let arr = { brand: 'Honda', price: 13000 }
let arr2 = { brand1: 'Rolls-Royce', price: 120000 }

//вам надо сравить их по цене
//если цена выше чем 100000 то добавить ключи что машина дорогая
//а если машине на дорогая
//поставить ключ что машина дешавая

if (arr.price > 100000 && arr2.price > 100000) {
    arr.quality = 'машина дорогая'
    arr2.quality = 'машина дорогая'
} else {
    arr.quality = 'машина дешевая'
    arr2.quality = 'машина дешевая'
}

console.log(arr, arr2);



let names = ['Alex', 'Jane', 'Bob', 'Gustavo']

let dead_sad  = {
p1: "Richard",
p2: "King",
p3: "Saytama",
p4: "Fred",
p5: "Diaz",
p6: "George",
p7: "Billy Harington"}

 // чтобы имена имена объектов перенисль в массив

let names2 = Object.values(dead_sad)
names = names.concat(names2)
console.log(names);


/* Создайте функцию "mult", в которой будут умножаться
* значения свойств x, y, z переданного объекта
*
* Результат умножения верните из функции
*/

const objectWithNumbers = {
    x: 5,
    y: 20,
    z: 3,

}

let mult = objectWithNumbers.x * objectWithNumbers.y * objectWithNumbers.z
console.log(mult);

///** ЗАДАЧА 69 - Деструктуризация объектов
/*
* Создайте функцию "mult", в которой будут умножаться
* значения свойств x, y, z переданного объекта
*
* Результат умножения верните из функции
*/

const objectWithNumbers2 = {
    x: 5,
    y: 20,
    z: 3,
    r: 'Russuia',
    j: true

}

let mult2 = objectWithNumbers2.x * objectWithNumbers2.y * objectWithNumbers2.z
console.log(mult2);
