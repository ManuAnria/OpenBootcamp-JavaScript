// Trabajando con objetos

const obj = {
    id: 4,
    nombre: 'Manu',
    apellido: 'Anria',
    isDev: true,
    libros_favoritos: ['El club de las 5 de la mañana', 'El poder del ahora', 'El alquimista'],
    '4-juegos': ['GTA', 'FIFA', 'COD', 'PES']
}

console.log(obj["4-juegos"])
console.log(obj.id)

const prop = 'isDev'
console.log(obj[prop])

// Copiar un objeto, pero no es una copia profunda

const obj2 = obj
console.log(obj2)

// Modificar un elemento de un objeto en una copia modifica tambien el original
obj2.nombre = 'Natalia'
console.log(obj2.nombre)
console.log(obj.nombre)

// No aplica asi para valores
let  val1 = 5
let  val2 = val1

val2 = 10
console.log(val1)
console.log(val2)

// Copia profunda de un objeto
const obj3 = {...obj }
console.log(obj.nombre)

obj3.nombre = 'Manuel'
console.log(obj3.nombre)


// Ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: 'Lo que el viento se llevo', año: 1939},
    {titulo: 'Titanic', año: 1997},
    {titulo: 'Mohana', año: 2016},
    {titulo: 'El efecto mariposa', año: 2004},
    {titulo: 'TED', año: 2012},
]

console.log(listaPeliculas)

// .sort() --> Muta el valor del array original
listaPeliculas.sort((a, b) => a.año - b.año)
console.log(listaPeliculas)


