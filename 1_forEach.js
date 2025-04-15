//Junior

// 1.Дан массив чисел. Используя forEach, выведите каждый элемент массива в консоль.

let arr = [2, 3, 5, 6, 8, 9];
arr.forEach(item => console.log(item));

// 2. Дан массив строк. Выведите в консоль каждую строку с ее индексом в формате: "Элемент [индекс]: строка".

let arr1 = ['some', 'lome', 'tome', 'bome'];
arr1.forEach((elem, index) => console.log(`Элемент ${index} : ${elem} `));

// 3. Дан массив чисел. Увеличьте каждое число на 1 и выведите результат в консоль.

let arr3 = [2, 3, 5, 6, 8, 9];
arr.forEach(item => console.log(item + 1));

// 4. Дан массив объектов {name: "Имя"}. Выведите все имена в консоль.
let arr4 = [
    {name: 'Alex'},
    {name: 'Palex'},
    {name: 'Talex'},
    {name: 'Balex'},
];

arr4.forEach(item => console.log(item.name));

// 5. Дан массив чисел. Подсчитайте сумму всех элементов, используя forEach, и выведите результат.

let arr5 = [2, 3, 5, 6, 8, 9];
let res = 0;
arr5.forEach(item => console.log(res += item));

//Middle

// 1. Дан массив чисел. Используя forEach, создайте новый массив, содержащий только четные числа.
let arr6 = [2, 3, 5, 6, 8, 9];
let evenArr = [];
arr6.forEach(item => {
    if (item % 2 === 0) {
        evenArr.push(item);
    }
});
console.log(evenArr);

// 2. Дан массив объектов {id: number, value: number}. Измените значение value каждого объекта, прибавив к нему его id.

arr7 = [
    {id: 1, value: 7},
    {id: 2, value: 8},
    {id: 3, value: 9},
    {id: 4, value: 6},
    {id: 5, value: 5},
    {id: 6, value: 4},
]

arr7.forEach(item => {
    item.value = item.value + item.id
});

console.log(arr7);

// 3. Дан массив строк. Верните массив объектов {text: строка, length: число}, где length — длина строки.

let arr8 = ['some', 'comeni', 'romen', 'done'];
let newArr = [];
arr8.forEach((item) => {
    newArr.push({text: item, length: item.length})

})
console.log(newArr);

// 4. Дан массив чисел. Используя forEach, найдите максимальное значение и выведите его.
let arr9 = [2, 23, 5, 16, 8, 9];
let minValue = arr9[0];
arr9.forEach(item => {
    minValue = Math.max(minValue, item);
});

console.log(`Максимальное число в массиве - ${minValue}`);

// 5. Дан массив объектов {name: string, age: number}. Выведите только имена тех, чей возраст больше 18.

let users = [
    {name: 'Alex', age: 15},
    {name: 'Palex', age: 19},
    {name: 'Talex', age: 16},
    {name: 'Balex', age: 24}
]

let countUsers = 0;

users.forEach(user => {
    if (user.age > 18) {
        countUsers++;
        console.log(`Есть ${countUsers} пользователь больше 18, это - ${user.name} и ему ${user.age}`);
    }
});

//Senior

// 1. Дан массив чисел. Используя forEach, реализуйте алгоритм подсчета частоты каждого числа и верните результат как Map.

