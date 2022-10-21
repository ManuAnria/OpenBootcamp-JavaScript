// Operador .ValueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);  // prototipo Number

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf()); 

console.log(b.valueOf());


// NaN (Not a Number) - Infinity
let n = Number("Hola");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor2 = null;
console.log(numerador / divisor2);


// Como convertir string a valores numericos - Number, parseInt, parseFloat
let numero = "5.89";
console.log(typeof numero);

let num2 = 17.2
console.log(numero + num2); // Error de concepto. Concatenacion

console.log(Number(numero) + num2);

console.log(parseInt(numero));
// Covierte a numero entero, descartando los decimales

console.log(parseFloat(numero));
// Covierte a numero decimal, manteniendo los decimales


// Numeros hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));


// Obtener min y max en Javascript
let min_precision = Number.EPSILON;
console.log(min_precision);

let min_valorJS = Number.MIN_VALUE;
console.log(min_valorJS);

let max_valorJS = Number.MAX_VALUE;
console.log(max_valorJS);

