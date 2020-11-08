function alphabetLow() {
    const alphabetLow = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetLowArray = []
    let counter = 0
    for (let letter of alphabetLow) {
        alphabetLowArray[counter] = letter
        counter++
    }
    return alphabetLowArray
}

function alphabetUp() {
    const alphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let alphabetUpArray = []
    let counter = 0
    for (let letter of alphabetUp) {
        alphabetUpArray[counter] = letter
        counter++
    }
    return alphabetUpArray
}

class Alphabet {
    constructor(low, up) {
        this.low = low
        this.up = up
    }
}

const low = alphabetLow()
const up = alphabetUp()

export default new Alphabet(low, up);