// 1. Функция сложения двух чисел
const forSum = (a, b) => a + b
console.log(forSum(3, 32))

function forSum2 (a, b) {
    return (a + b)
    }
console.log(forSum2(3, 32))

// 2. Функция определения имени (если имя ваше, то привет + имя)
function showAlex(name) {
    const message = 'Привет ' + name
    if (name === 'Alex') {
        console.log(message)
    }
}
showAlex('Alex')

// 3. Функция вычисления типа аргумента и вывод в консоль
const typeArg = text => console.log(typeof text)
typeArg(true)

function typeArg2 (text) {
    console.log(typeof text)
}
typeArg2('test')

// 4. Функция выбора четных элементов массива (возвращает новый массив)
const cars = ['Ауди', 'Порш', 'Мазда', 'Киа']
 function forEven(item, index) {
    return index%2 !==0
}
const filtered = cars.filter(forEven)
console.log(filtered)

const arr = ['Ауди', 'Порш', 'Мазда', 'Киа']
function getEven(arr) {
    return arr.filter((item, index) => index%2 !==0)
}
console.log(getEven(arr))


