"use strict"
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    while (expr.length % 10) {
        expr = '0' + expr;
    }
    let array = [];
    MORSE_TABLE['**********'] = ' ';
    for (let i = 0; i < expr.length; i += 10) {
        array.push(expr.substring(i, i + 10));
    }
    array = array.map(a => a.replace(/11/g, '-')).map(a => a.replace(/10/g, '.')).map(a => a.replace(/[00]/g, ''));
    for (let i = 0; i < array.length; i++) {
        array[i] = MORSE_TABLE[array[i]];
    }
    return array.join('');
}

module.exports = {
    decode
}

console.log(decode('00000000100000111010101010111100111011100000001011111110101011111010101010101010'));