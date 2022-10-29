// Como unir 2 listas --> .concat(lista2) --> No muta el valor de la lista original
const lista1 = ['hola', 2, false, null]
const lista2 = ['adios', 8, true, undefined]

console.log(lista1.concat(lista2))
console.log(lista1)

const lista3 = lista1.concat(lista2)
console.log(lista3)

// Como unir dos listas con factor de propagacion --> ...lista1, ...lista2
console.log(...lista3)

const lista4 = [...lista1, ...lista2]   // Una lista con los valores de las otras dos
console.log(lista4)

// ERROR en entendimiento del factor de propagacion
const lista5 = [lista1, lista2]   // Crea una lista con dos listas dentro
console.log(lista5)

