// Задача 1
// Используя циклы, найдите сумму элементов этого объекта.
// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// function findSumObj(obj) {
//     let res = 0

//     for (let key in obj) {
//         let firstStape = obj[key]

//         for (let key2 in firstStape) {
//             let secondStep = firstStape[key]

//             for (let key3 in secondStep) {
//                 res += secondStep[key3]
//             }
//         }
//     }

//     return res
// }
// console.log(findSumObj(obj))
// ------------------------------------end------------------

// Задача 2
// С помощью вложенных циклов выведите на экран все строки с данными.
// let data = {
//     1: [
//         'data11',
//         'data12',
//         'data13',
//     ],
//     2: [
//         'data21',
//         'data22',
//         'data23',
//     ],
//     3: [
//         'data31',
//         'data32',
//         'data33',
//     ],
//     4: [
//         'data41',
//         'data42',
//         'data43',
//     ],
// };
// for(let key in data) {
// 	let firstStep = data[key]

// 	for(let key of firstStep) {
// 		console.log(key)
// 	}
// }
// ------------------------------------end------------------


// Задача 3
// Выведите на экран данные каждого работника в формате имя - зарплата.
// let employees = [
// 	{
// 		name: 'Oleg',
// 		salary: 300,
// 	},
// 	{
// 		name: 'Igor',
// 		salary: 400,
// 	},
// 	{
// 		name: 'Artem',
// 		salary: 500,
// 	},
// ];

// for(let key of employees) {
//     console.log(`Name ${key.name} - ${key.salary}`)
// }
// ------------------------------------end------------------


// Задача 4
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
// let employees = [
// 	{
// 		name: 'Oleg',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'Tamara',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'Ivan',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'Ira',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'Anna',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// function getSalary(obj) {
//     let sumSalary = 0

//     for(let key of obj) {
//         if(key.age >= 30) {
//             sumSalary += key.salary
//         }
//     }

//     return sumSalary
// }
// getSalary(employees)
// ------------------------------------end------------------

// Задача 5
// Добавьте в следующий массив еще одного работника:
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// ];

// function addWorker(arr) {
//     arr.push({
//         name: 'Ivan',
//         salary: 800,
//         age: 40
//     })
//    return arr
// }
// addWorker(employees)
// ------------------------------------end------------------

// Задача 6
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
// let arr = [4, 2, 5, 19, 13, 0, 10]

// function makeSqr(arr) {
//     let res = 0

//     for(let key of arr) {
//         res += Math.pow(key, 3)
//     }

//     return  Math.sqrt(res)
// }
// makeSqr(arr)
// ------------------------------------end------------------

// Задача
// С помощью цикла заполните массив 10-ю случайными целыми числами.
// let arr = []
// for(let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 10))
// }

// Задача 
// Дана строка. Проверьте, заканчивается ли эта строка на '.html', если нет - добавте.
// let str = 'index'
// let res = ''

// if(!str.endsWith('.html')) {
//   let strInArr = str.split('')
//   strInArr.push('.html')

//   res = strInArr.join('')
// }

// Задача 
// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
// let str = '1-2-3-4-5'
// while(str.includes('-')) {
//   str =  str.replace('-', '.')
// }
// console.log(str)

// Задача
// Дана строка '1-2-3-4-5'. Запишите каждое число этой строки в отдельный элемент массива.
// let str = '1-2-3-4-5'
// let res = []
// for(let i = 0; i < str.length; i++) {
//     let isNumber = Number(str[i]) 
//     if(isNumber) {
//         res.push(isNumber)
//     }
// }
// console.log(res)


// Задача
// Сделайте функцию, которая параметром будет принимать масив строк и делать заглавной первую букву каждого слова этого масива.
// let arr = ['asd', 'fasd', 'gfa', 'sdg'];
// function foo(str) {
//     let res = []
//     for (let key of str) {

//         res.push(key[0].toUpperCase() + key.slice(1))
//     }
//     return res
// }
// console.log(foo(arr))



let func1 = function() {
    return 1
}
let func2 = function() {
    return 2
}
console.log(func1() + func2())