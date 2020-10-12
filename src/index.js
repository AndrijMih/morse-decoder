const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let result = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        let str = expr.slice(i, i + 10);
        if (str[0] === '*') {
            result = `${result} `;
        } else if (str[0] === '0') {
            let index = '' + +str;
            result = `${result}${MORSE_TABLE[encode(index)]}`;
        } else if (str[0] === '1') {
            result = `${result}${MORSE_TABLE[encode(str)]}`;
        }
    }
    return result;
}

function encode(str) {
    let morseCode = '';
    for (let i = 0; i < str.length; i = i + 2) {
        if (str.slice(i, i + 2) === '10') {
            morseCode = `${morseCode}.`;
        } else if (str.slice(i, i + 2) === '11') {
            morseCode = `${morseCode}-`;
        }
    }
    return morseCode;
}

module.exports = {
    decode
}