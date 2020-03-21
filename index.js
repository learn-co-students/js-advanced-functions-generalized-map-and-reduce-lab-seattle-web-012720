// Add your functions here
function map(arr, func) {
    const newArr = [];
    arr.forEach(e => newArr.push(func(e)));
    return newArr;
}

function reduce(arr, func, start) {
    let total = null;
    if (start) {
        total = start;
        for (let i=0; i < arr.length; i++) {
            total = func(arr[i], total)
        }
    } else {
        total = arr[0];
        for (let i=1; i < arr.length; i++) {
            total = func(arr[i], total)
        }
    } 
    return total;
}