// 1. Функция сложения двух чисел
const forSum = (a, b) => a + b
console.log(forSum(3, 32))
// написал через стрелки


// 2. Функция определения имени (если имя ваше, то привет + имя)
function showAlex(name) {
    let message = 'Привет ' + name
    if (name === 'Alex')
    console.log(message);
}
showAlex('Alex')

// 3. Функция вычисления типа аргумента и вывод в консоль
const typeArg = (text) => console.log(typeof text)
typeArg(true)

// 4/ Функция выбора четных элементов массива (возвращает новый массив)
let cars = ['Ауди', 'Порш', 'Мазда', 'Киа']
 function forEven(item, index) {
    return index%2 !==0
}
let filtered = cars.filter(forEven)
console.log(filtered)