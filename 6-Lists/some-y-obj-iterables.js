// .some() --> returns true if at least one element in the array passes the test
const array = [3, 7, 2, 4, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < -10)
console.log(res)

const existe = array.some(valor => valor === 9)
console.log(existe)

const listaObjetos = [
    {nombre: 'Manu', edad: 28},
    {nombre: 'Nati', edad: 27},
    {nombre: 'Juli', edad: 20},
    {nombre: 'Agus', edad: 25},
]

const existePersona = listaObjetos.some(o => o.nombre === 'Nati')
console.log(existePersona)

// Obtener lista a traves de objeto iterable
const str = 'Hola soy Manu'
console.log(str[0])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, 'hola', 4])
const ar_set = Array.from(set)
console.log(ar_set)


const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)