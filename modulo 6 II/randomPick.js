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


const arr =  [2, 1, 3, 5, 3, 2]
const s = "abacabad"

function firstDuplicate(arr) {
    let stored = {};

    for (let i = 0; i < arr.length; i++) {
      if (stored[arr[i]]) {
        return arr[i]
      } else {
       stored[arr[i]] = arr[i]
      }
    }
    return -1;
}

function firstNotRepeatingCharacter(s) {

    for (let i = 0; i < s.length; i++) {
     if(s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
         return s.charAt(i)
         break;
     }
    }
    return '_';
}

const a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

     [[7,4,1], 
     [8,5,2], 
     [9,6,3]]

function rotateImage(a) {
    const first = a[0].splice(0,1)
    a[0].push(first[0])
    const sec = a[0].splice(1,1)
    // for (const sub of a) {
    //     const f = sub.splice(0,1)
    //         console.log('f', f)
    //     for (const num of sub) {
            
    //     }
    // }
}
   rotateImage(a) 
console.log('ppp', firstNotRepeatingCharacter(s))

console.log('ppp', firstDuplicate(arr))