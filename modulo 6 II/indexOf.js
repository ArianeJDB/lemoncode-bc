const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
const encryptedText = document.getElementById('encrypted')
const decryptedText = document.getElementById('decrypted')
const encryptButton = document.getElementById('encrypt')
const decryptButton = document.getElementById('decrypt')

function transformCharacter(sourceAlphabet, resultAlphabet, character) {
    
    const characterIndex = sourceAlphabet.indexOf(character)
    if(characterIndex === -1) {
        return character
    }
    return  resultAlphabet[characterIndex]
}
function transformValue(message, sourceAlphabet, resultAlphabet) {
    let finalMessage = ''
    messageLowerCase = message.toLowerCase()
    for (const character of messageLowerCase) {
            finalMessage = finalMessage + transformCharacter(sourceAlphabet, resultAlphabet, character)  
    }
    return finalMessage
}


function showMessage(e) {
    const triggerId = e.currentTarget.id
    if(triggerId === 'encrypt') {

        encryptedText.value = transformValue(decryptedText.value, encryptedAlphabet, plainAlphabet)
    } else if (triggerId === 'decrypt') {
        decryptedText.value = transformValue(encryptedText.value, plainAlphabet, encryptedAlphabet)
    }
}


encryptButton.addEventListener('click', showMessage)
decryptButton.addEventListener('click', showMessage)