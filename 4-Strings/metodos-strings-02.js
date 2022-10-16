// Metodos de strings - 2

let input = "Escorpio";
let db = "escorpio";

console.log(input === db);

// toLowerCase() - toUpperCase()

console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());


// Formas de concatenar strings
let str1 = "Hola soy la primera cadena";
let str2 = "Y yo soy la segunda cadena.";

console.log(str1.concat(" ", str2));
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`);

// Eliminar espacios al inicio y al final de un string
let str3 = "    Hola soy la primera cadena     ";
console.log(str3.length);
// trim()
console.log(str3.trim().length);
console.log(str3.trimStart().length);
console.log(str3.trimEnd().length);

// Obtener el caracter de una posicion especifica
let str4 = "Hola soy el string numero 4";

console.log(str4.charAt(5));
console.log(str4[5]);

// Obtener la posicion de una palabra dentro de un string
let str5 = "Hola soy el String numero 5 y no el String numero 4";

// IndexOf() devuelve la posicion de la primera coincidencia
console.log(str5.indexOf("String"));
console.log(str5.indexOf("manuel"));
console.log(str5.charAt(12));

// LastIndexOf() devuelve la posicion de la ultima coincidencia
console.log(str5.lastIndexOf("String"));








