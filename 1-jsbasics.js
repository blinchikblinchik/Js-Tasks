//Задание 2
//Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)
let user = prompt('Ваше имя');
alert('Привет, '+ user);

//Задание 3
//Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.
let userData = prompt('Число');
let numberData = Number(userData);
let degree = prompt('Степень');
let numberDegree = Number(degree);
console.log(numberData ** numberDegree);
