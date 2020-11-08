// cipher script

import alphabet from "./alphabet.js";

function encrypt(cipher, key) {
    // initialize the variables
    let alphabetPosition
    let leap
    let newLetter
    let isItLetter

    for (let letter of cipher) {
        isItLetter = false

        // test wheter the "letter" is actually a letter of the alphabet, and not a white space or other stuff.
        
        for (let char of alphabet.low) { // Here I decided to test all letters in a lower case situation
            if (letter.toLowerCase() === char) {
                isItLetter = true
                break
            }
        }   

        // do, finally, the switching

        if (isItLetter) {
            switch (letter) {
                case letter.toUpperCase():
                    alphabetPosition = alphabet.up.indexOf(letter) // get the position of the actual letter in the alphabet
                    leap = alphabetPosition + key // determines a leap, based on the key parameter
                    if (leap > 25) leap %= 26
                    newLetter = alphabet.up[leap] // create the encrypited letter
                    cipher = cipher.replace(letter, newLetter) // it changes the respective letter to the new encrypited letter                
                    break;        
                case letter.toLowerCase():
                    alphabetPosition = alphabet.low.indexOf(letter) // get the position of the actual letter in the alphabet
                    leap = alphabetPosition + key // determines a leap, based on the key parameter
                    if (leap > 25) leap %= 26
                    newLetter = alphabet.low[leap] // create the encrypited letter
                    cipher = cipher.replace(letter, newLetter) // it changes the respective letter to the new encrypited letter
                    break;
            }
        }
    }
    return cipher
}

function decrypt(cipher, key) {
    // initialize the variables
    let alphabetPosition
    let leap
    let newLetter
    let isItLetter

    for (let letter of cipher) {
        isItLetter = false

        // test wheter the "letter" is actually a letter of the alphabet, and not a white space or other stuff.
        
        for (let char of alphabet.low) { // Here I decided to test all letters in a lower case situation
            if (letter.toLowerCase() === char) {
                isItLetter = true
                break
            }
        }   

        // do, finally, the switching

        if (isItLetter) {
            switch (letter) {
                case letter.toUpperCase():
                    alphabetPosition = alphabet.up.indexOf(letter) // get the position of the actual letter in the alphabet
                    leap = alphabetPosition - key // determines a leap, based on the key parameter
                    if (leap < 0) leap += 26 // This line fix the loop whether the leap value stays below 0
                    newLetter = alphabet.up[leap] // create the encrypited letter
                    cipher = cipher.replace(letter, newLetter) // it changes the respective letter to the new encrypited letter                
                    break;        
                case letter.toLowerCase():
                    alphabetPosition = alphabet.low.indexOf(letter) // get the position of the actual letter in the alphabet
                    leap = alphabetPosition - key // determines a leap, based on the key parameter
                    if (leap < 0) leap += 26 // This line fix the loop whether the leap value stays below 0
                    newLetter = alphabet.low[leap] // create the encrypited letter
                    cipher = cipher.replace(letter, newLetter) // it changes the respective letter to the new encrypited letter
                    break;
            }
        }
    }
    return cipher
}
// DOM

    // encrypt
const encryptMessage = document.querySelector('input#encryptMessage')
const encryptKey = document.querySelector('input#encryptKey')
const encryptButton = document.querySelector('input#encryptButton')
const encryptResult = document.querySelector('p#encryptResult')

encryptButton.addEventListener('click', () => {
    const message = encryptMessage.value.trim()
    const key = Number(encryptKey.value)

    encryptResult.innerHTML = ''
    if (message === '') {alert('Submit some text')} else {
        encryptResult.innerHTML = encrypt(message, key)
        encryptResult.classList.toggle('hidden')
    }
})

    // decrypt
const decryptMessage = document.querySelector('input#decryptMessage')
const decryptKey = document.querySelector('input#decryptKey')
const decryptButton = document.querySelector('input#decryptButton')
const decryptResult = document.querySelector('p#decryptResult')

decryptButton.addEventListener('click', () => {
    const message = decryptMessage.value.trim()
    const key = Number(decryptKey.value)

    decryptResult.innerHTML = ''
    if (message === '') {alert('Submit some text')} else {
        decryptResult.innerHTML = decrypt(message, key)
        decryptResult.classList.toggle('hidden')
    }
})

// adicionar botão para copiar
// melhorar design