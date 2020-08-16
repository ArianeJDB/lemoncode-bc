let numbers = []
function randomPick(n, min, max) {
    while (numbers.length < n) {
        const random = Math.floor(Math.random() * (max - min + 1) + min)
        if(numbers.length > 0) {
            if(!isRepeated(random)) {
            numbers.push(random)
            }
        } else {
            numbers.push(random)
        }
        
    }
    console.log(numbers)
}

function isRepeated(random) {
    let sameNumber = false
    for (const number of numbers) {
        if(number === random) {
            sameNumber = true
        }
    }
    return sameNumber;
}
randomPick(9, 1, 10)