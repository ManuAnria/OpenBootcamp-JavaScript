// Principales operaciones artiméticas
let a = 3.5
let b = 4.8

// Suma
console.log(a + b)

// Resta
console.log(a - b)

// Multiplicación
console.log(a * b)

// División
console.log(a / b)

// Potencia
console.log(a ** b)

// Raiz cuadrada
console.log(Math.sqrt(a))


// Representacion de numeros en strings
console.log(typeof a)

let a_s = a.toString()
console.log(typeof a_s)


// Redondeo de numeros
let c = 3.3
let d = c * 3

console.log(d)

// .toFixed() - Limitar el numero de decimales al valor indicado
console.log(d.toFixed(2))
console.log(typeof(d.toFixed(4)))   // ToFixed devuelve un string!!

// .toPrecision() - Limitar el numero de digitos al valor indicado
console.log(d.toPrecision(3))
console.log(typeof(d.toPrecision(3)))   // ToPrecision devuelve un string!!