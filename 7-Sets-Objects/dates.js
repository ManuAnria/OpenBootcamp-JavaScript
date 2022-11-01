// Trabajando con Fechas

const fecha = new Date()
console.log(fecha)

// ATENCION: Los meses empiezan en 0
const fecha2 = new Date(1987, 10, 13)
console.log(fecha2)

// en Milisegundos --> 1 segundo = 1000 milisegundos --> Pueden ser positivos o negativos
const fecha3 = new Date(1000000000000)
console.log(fecha3)
const fecha4 = new Date(-1000000000000)
console.log(fecha4)

// En strings
const fecha5 = new Date('October 13, 1979 12:15:15')
console.log(fecha5)

// Comparar fechas
console.log(fecha > fecha2)

const fecha6 = new Date(1987, 10, 13)
console.log(fecha2 === fecha6) // Error: No se puede comparar fechas con ===

// Para comparar hay que ocnvertir a milisegundos --> .getTime()
console.log(fecha2.getTime() === fecha6.getTime())


///// Obtener dia, mes y año de una fecha
// Obtener dia --> .getDate()
console.log(fecha2.getDate())

// Obtener mes --> .getMonth()
console.log(fecha2.getMonth() + 1)

// Obtener año --> .getFullYear()
console.log(fecha2.getFullYear())

// .toLocaleDateString()
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString())