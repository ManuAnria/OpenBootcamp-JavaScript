// Comparaciones

// Igualdad

// == Compara el valor de las variables
if (5 == "5") {
    console.log("5 es igual a 5");
}

// === Compara el valor y el tipo de las variables
if (5 === "5") {
    console.log("5 es muy igual a 5");
}

// Desigualdad

let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a d - Debil");
}

if (c !== d) {
    console.log("c es muy diferente a d - Fuerte");
}

// Mayor/Menor que

let max = 7;
let min = 5;

if (max > min) {
    console.log("max es mayor que min");
}

if (max >= min) {
    console.log("max es mayor o igual que min");
}

if (min < max) {
    console.log("min es menor que max");
}

if (min <= max) {
    console.log("min es menor o igual que max");
}