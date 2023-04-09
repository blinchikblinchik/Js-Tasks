/*Задание 1
Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.*/
document.querySelector('input').addEventListener('keyup', function(){
    let li = document.createElement('li')
document.body.appendChild(li)
}
)*/

/*Задание 2
Вставить в html тег input (просто предусмотреть в разметке).
Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value*/
const input = document.querySelector('input').addEventListener('keyup', function(){
   console.log(input.value);
})*/

/*Задание 3
Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).*/
const form = document.querySelector('form')
form.addEventListener('submit', function(event){
event.preventDefault()
const input = this.querySelector('.text');
let li = document.createElement('li');
let ul = document.querySelector('ul');
ul.appendChild(li);
li.innerText = input.value
input.value = ''
})

/*Задание 4
Калькулятор. 
Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
1) решить с помощью if
2) решить с помощью evel (https://developer.mozilla.org/...)*/
const form = document.querySelector('.calc')
const select = document.querySelector('select');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const div = document.querySelector('div');
let result;
form.addEventListener('submit', function (event) {
    event.preventDefault()
    if (select.value === '+') {
        result = +num1.value + +num2.value
    } else if (select.value === '-') {
        result = +num1.value - +num2.value
    } else if (select.value === '*') {
        result = +num1.value * +num2.value
    } else if (select.value === '/') {
        result = +num1.value / +num2.value
    }
    div.innerText = result
})

/*Задание 5
Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.*/
const button = document.querySelector('button')
function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
} 
button.addEventListener('mouseenter', function(){
    let color = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`
    button.style.backgroundColor = color
})

button.addEventListener('mouseleave', function(){
   button.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`;
})
