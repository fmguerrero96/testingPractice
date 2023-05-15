function analyzeArray(arr){
    const average = avg(arr)
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const length = arr.length
    return{
        average,
        min,
        max,
        length
    }
}

function avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length
}

module.exports = analyzeArray