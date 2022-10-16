let nombre = "Manuel";
let apellido = "Anria";

let estudiante = nombre.concat(" ", apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let estudianteLength = estudiante.length;
console.log(estudianteLength);

let primerLetra = nombre.charAt(0);
console.log(primerLetra);

let ultimaLetra = apellido[apellido.length - 1];
console.log(ultimaLetra);

let estudianteTrim = estudiante.trim();
console.log(estudianteTrim);

let nombreInEstudiante = estudiante.includes(nombre);
console.log(nombreInEstudiante);