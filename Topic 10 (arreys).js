// перебор массива с выводом в консоль каждего елемента
const languages = ['PHP', 'Java', 'JavaScript', 'Rube']
for (const language of languages) {
    console.log(language)
}


// преобразовать массив в строку и обратно в массив
const year = ['1', '2', 'Anya', 'Ben']
const str = year.join(';')
console.log(str)
console.log (typeof str)
const toArray = str.split (';')
console.log(toArray)
console.log (Array.isArray([toArray]))


// Добавить к каждому элемента массива слова hello
const forHello = ['Alex', 'Ivan', 'Kolya', 'Katya']
const result = forHello.map(function (item) {
    return item + 'hello';
})
console.log(result)
/* еще один вариант - возможно неправильный
const word = 'hello'
forHello.forEach(function(item, index, array){
console.log (`${item}${word}`)
})*/

// Преобразовать числовой массив в boolean
const test = [1, 2, 3]
console.log(Boolean([1, 2, 3]))



