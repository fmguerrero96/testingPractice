function reverseString(string){
    let stringArray = string.split('')
    let reverseArray = stringArray.reverse()
    let result = reverseArray.join('')
    return result
}

module.exports = reverseString