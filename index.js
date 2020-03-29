// Add your functions here

const map = (arr, callback) => arr.map(callback);
const reduce = (arr, callback, init) => init ? arr.reduce(callback, init) : arr.reduce(callback);