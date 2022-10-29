// Metodos avanzados de arrays
// .map(), .filter(), .reduce()

const array = ['San Sebastian', 'Madrid', 'Barcelona', 'Alicante', 'Bilbao']

const val = array.forEach(v => {
    console.log(v)
})

console.log(val)

// map() devuelve un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const newArray = array.map((v, indice) => `${indice + 1} - ${v}`)

console.log(newArray)

// filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const listaObjetos = [
    {nombre: 'Manu', edad: 28},
    {nombre: 'Nati', edad: 27},
    {nombre: 'Juli', edad: 20},
    {nombre: 'Agus', edad: 25},
]

/* const mayores = listaObjetos.filter(o => {
    if (o.edad > 25) {
        return true
    }   else {
        return false
    }
}) */

const mayores = listaObjetos.filter(o => o.edad > 25)
console.log(mayores)

const nuevaLista = listaObjetos.filter(o => o.nombre !== 'Agus')
console.log(nuevaLista)

// reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const valores= [3, 56, 23, 5, 90, 100]
// .reduce(acumulador, actual, indice, arrayOriginal)
const suma = valores.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(suma)


