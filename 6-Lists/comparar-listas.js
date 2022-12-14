// Comparar listas
// every() - verifica si todos los elementos de un array cumplen con la condición implementada por la función dada.
const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

/* const resultado = array.every(valor => {
    if (valor > 0) {
        return true
    } else {
        return false
    }
}) */

const resultado = array.every(valor => valor > 0)

console.log(resultado)


// Comparar
const ar1 = [1, 2, 3, 4, 5]
const ar2 = [1, 2, 3, 4, 5]

console.log(ar1 === ar2) 
// Las listas no se pueden comparar de esta manera


const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, indice) => valor === array_2[indice])
    return res
}

console.log(compararArrays(ar1, ar2))