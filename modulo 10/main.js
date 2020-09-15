// hasId
// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).

// TIP: No accedas a 'id' con punto (.) o con corchetes ([]).

const obj = {
  id: 9,
  name: 'Ari'
}
const obj2 = {
  name: 'Ariane'
}

function hasId (obj) {
  console.log('hasId', 'id' in obj)
 return 'id' in obj
}

hasId(obj)

// head
// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

// TIP: No utilices el corchete ([]) para acceder a la posición 0.

const arr = [
  'primer',
  'segun',
  'tercer',
  'Ari',
  'Almohada',
  'Aaa'
]

function head(arr) {
  const [ first ] = arr
  console.log('head', first)
  return first
}

head(arr)

// tail
// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.

// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.


function tail(arr) {
  const [, second, third ] = arr
  const newArr = [second, third]
  console.log('tail', newArr)
  return newArr
}
tail(arr)

// swapFirstToLast
// Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.

// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

function swapFirstToLast(...array) {

  const [ first, ...rest ] = arr
  
  const newArr = [...rest, first]
  console.log('swapFirstToLast', newArr)

  return newArr
}
swapFirstToLast(arr)


// excludeId
// Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.

// TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.

function excludeId(obj) {
  const { id, ...rest } = obj
  const newObj = {...rest}
  console.log('excludeId', newObj)
  
  return newObj
}

excludeId(obj)

// wordsStartingWithA
// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.

// TIP: No utilices bucles.

function wordsStartingWithA(arr) {
  console.log('wordsStartingWithA', arr.filter(letter => letter.charAt(0) === 'A'))
  return arr.filter(letter => letter.charAt(0) === 'A')

}

wordsStartingWithA(arr)


// concat
// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.

// TIP: No utilices bucles.

function concat(...args) {
  console.log('concat', args.join('|'))
  return args.join('|')
}
concat('hola', 'que tal', 'todo', 'bien')

// multArray
// Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

// TIP: No utilices bucles.
const nums = [1,2,3,4,5,6,7,8,9,0]

function multArray(nums, target) {
  console.log('multArray', nums.map(num => num * target))
  return nums.map(num => num * target)
}
multArray(nums, 5)


// calcMult
// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.

// TIP: No utilices bucles.

function calcMult(...args) {
  const product = args.reduce((acc, num) => acc * num, 1)
  console.log('calcMult', product)
}

calcMult(2,2,2,1)