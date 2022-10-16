// Metodos mas utilizados con strings
// Cómo obtener la longitud de un sring
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice(), substring(), substr()
let slice_str = str.slice(5, 10);    //(inicio, fin)
console.log(slice_str);

let substring_str = str.substring(5, 10);    // Igual que slice
console.log(substring_str);

let substr_str = str.substr(5, 10);  // (posicion, longitud) --> metodo depreciado
console.log(substr_str);


// Reemplazar partes de una cadena de caracteres
let cadena = "Hola mi nombre es Manuel";
console.log(cadena)

console.log(cadena.replace("Manuel", "Juan"));

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que caen de los arboles. Tito es un mono muy especial";

console.log(texto_largo.replace("los", "cinco"));
// Por defecto actua sobre el primer elemento que encuentra

// Al utilizar la expresion global /g, actua sobre todos los elementos
console.log(texto_largo.replace(/los/g, "cinco"));


