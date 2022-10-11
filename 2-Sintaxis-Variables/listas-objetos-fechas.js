//Listas-Arrays
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3)
lista3[0] = 1;
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Samsung",
    isWhite: false,
    contactos: ["Pepe", "Juan", "Maria"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32,
    },
    "altura-tarjeta": 2,    //No se puede usar un guion medio sin usar comillas
}

movil.año = 2020;

console.log(movil.contactos);
console.log(movil.tarjeta.almacenamiento);
console.log(movil.año);

//Fechas
// Librerias de apoyo: moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);    //Milisegundos desde 01/01/1970
console.log(fecha_milis);

const fecha_cadena = new Date("Octobre 11 2022");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 9, 11)   //Meses empiezan en 0
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const año = ahora.getFullYear();

console.log(dia + "/" + mes + "/" + año);


