// Add your functions here
function map(array, func) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]))
    }
    return newArray
}

function reduce(array, func, start) {
    if (start) {
        array.unshift(start)
    }
    let output = array[0]

    for (let i = 1; i < array.length; i++) {
        output = func(output, array[i])
    }

    return output
}