// Metodos de strings - 3
// https://regexr.com/ - Expresiones regulares

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que caen de los arboles. Tito es un mono muy especial";

console.log(texto_largo.match(/no/g));

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("prefiere"))

//Saber si un string empieza o termina con una palabra
console.log(texto_largo.startsWith("Tito"));
console.log(texto_largo.endsWith("Tito"));