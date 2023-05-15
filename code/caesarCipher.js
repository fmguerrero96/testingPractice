function caesarCipher(str, shift){
    const charArr = str.split('')

    for (let i = 0; i < charArr.length; i++) {
        const char = charArr[i];
        if (char !== ' ') {
          const charCode = char.charCodeAt();
          const shiftedCharCode = (charCode + shift) % 256;
          const shiftedChar = String.fromCharCode(shiftedCharCode);
          charArr[i] = shiftedChar;
        }
      }

    const encryptedString = charArr.join('');
    return encryptedString;
}

module.exports = caesarCipher