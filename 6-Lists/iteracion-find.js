// Iterar valores de una lista
const array = ['hola', 2, 5, 90, false, undefined]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma ES6 (mas moderna) --> forEach()
let suma = 0
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma += valor
    console.log(valor)
})
console.log(suma)

// Busqueda de un valor en una lista --> find()
// Encontrar '90'
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})
console.log(variable)

const listaObjetos = [
    {nombre: 'Manu', edad: 28},
    {nombre: 'Nati', edad: 27},
    {nombre: 'Juli', edad: 20},
    {nombre: 'Agus', edad: 25},
]

const objeto = listaObjetos.find(o => {
    if (o.nombre === 'Nati') {
        return true
    }
})
console.log(objeto.edad)

// Otra forma mas corta
const objeto2 = listaObjetos.find(o => o.nombre === 'Nati')
console.log(objeto2.edad)

// Otra forma
const {edad} = listaObjetos.find(o => o.nombre === 'Nati')
console.log(edad)





