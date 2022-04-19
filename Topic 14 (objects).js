// 1. Создать обьект, добавить к нему свойство
const man = {
   }

   man.name = 'Вася'
   man.age = 44
   man.job = 'teacher'

// 2. Изменить свойство обьекта
    man.age = 18
    man.job = 'policeman'

//  3. Сделать свойство обьекта функцией сложения двух чисел
function forSum (a, b) {
    return (a + b)
}

const folder = {
    colour : 'grey',
    material: 'paper',
    size: 5,
}

folder.size = forSum(12, 34)

console.log (folder.size)

// через метод
const bag = {
    pen : 2,
    apple: 5,
    sum(a, b){
        return a + b
    }
}

bag.sum()

