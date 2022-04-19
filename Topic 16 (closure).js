// Реализовать инкапсуляцию
function useCounter() {
    let Count = 1
    return function() {
        return Count++
    }
}

const counter1 = useCounter()
console.log(counter1())
console.log(counter1())


const counter2 = useCounter()
console.log(counter2())