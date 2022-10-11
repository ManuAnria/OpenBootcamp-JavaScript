var variable;
let variableLet;

// const constante;

const constante = "Hola soy constante";
console.log(constante);

// constante = "Chau"; NO SE PUEDE MODIFICAR UNA CONSTANTE

// Diferecia entre var y let
var a = 1;
console.log(a);

a = 5;
console.log(a);

let b = 3;
console.log(b);

b = 7;
console.log(b);

// Si bien parece que funcionan igual, var afecta a todo el scope, mientras que let solo afecta al bloque en el que se encuentra
//var
var vble = "soy una variable var";

for (var i=0; i < 3; i++) {
    var vble = "soy la segunda variable var";
}

console.log(vble);

//let
let vbleLet = "soy una variable let";

for (let i=0; i < 3; i++) {
    let vbleLet = "soy la segunda variable let";    //'vbleLet' is declared but its value is never read.
}

console.log(vbleLet);

// Typeof

console.log(typeof 4);
console.log(typeof "Hola");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof vble);
console.log(typeof vbleLet);
