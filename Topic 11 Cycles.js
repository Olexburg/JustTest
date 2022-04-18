// Цикл, который будет выводить число а, пока оно не станет меньше 10

//1 вариант
let a = 0
while (a < 9) {
    a++
    console.log(a)
}

// через for
for (let b = 1; b < 10; b++) {
    console.log(b)
}

// через рекурсию
let i = 1
function recurs() {
    console.log(i)
    i++
    if (i < 10) {
        recurs()
    }
}
    recurs()

function rec(counter = 0) {
    console.log(counter)
    if (counter < 9) {
        rec(counter + 1)
    }
}
rec()








