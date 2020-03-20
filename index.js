// Add your functions here
function map(arr, func){
    let r = []
    for (let i = 0; i < arr.length; i++ ) {
    r.push(func(arr[i]))
  }
  return r
}

function reduce(arr, funct, start=0){
    let a = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
    for ( ; i < arr.length; i++ ) {
    a = funct(a, arr[i])
  }
  return a
}
     