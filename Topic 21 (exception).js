// Завернуть в try catch 1/0 и вывести на ноль делить нельзя
function checkDivToZero(a, b) {
    if (b !== 0) {
        return a / b
    } else {
        throw new Error()
    }
}

try {
    console.log( checkDivToZero(1, 0) )
} catch (error) {
    console.log('На ноль делить нельзя')
}

