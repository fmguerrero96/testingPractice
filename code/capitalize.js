const capitalize = (string) => {
    let firstCharacter = string.charAt(0)
    let upperCaseCharacter = firstCharacter.toUpperCase()
    let restOfString = string.slice(1)
    let result = upperCaseCharacter + restOfString
    return result 
}

