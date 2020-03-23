// Add your functions here
function map(sourceArray, fn) {
    const output = [];
    for (const element of sourceArray) {
        output.push(fn(element));
    }
    return output
}

function reduce(sourceArray, fn, start) {
    let output = sourceArray[0];
    if (start) {
        output += start;
    }
    for (let i = 1; i < sourceArray.length; i++) {
            output = fn(sourceArray[i], output);
    }
    return output
}
