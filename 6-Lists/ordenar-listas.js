// Ordenar -- Sort --> Modifica el array
const array = [2, 5, 9, 15, 1, 3, 0, 4]
console.log(array)

array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return +1
    } else {
        return 0
    }
})
console.log(array)

// Ordenar unicamente arrays numericos

const arrayNumerico = [4, 1, 7, 3, 1, 2, 56, 0]

arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico)


// Para arrays de objetos
const listaObjetos = [
    {nombre: 'Manu', edad: 28},
    {nombre: 'Nati', edad: 27},
    {nombre: 'Juli', edad: 20},
    {nombre: 'Agus', edad: 25},
]

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)
