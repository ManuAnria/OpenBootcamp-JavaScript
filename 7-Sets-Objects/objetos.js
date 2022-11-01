const datos = {
    nombre: 'Manuel',
    apellido: 'Anria',
    edad: 27,
    altura: 186,
    isDeveloper: true,
}

let age = 'edad'
console.log(datos[age])


const datos_friend1 = {
    nombre: 'Eze',
    apellido: 'Apa',
    edad: 28,
    altura: 175,
    isDeveloper: true,
}

const datos_friend2 = {
    nombre: 'Fede',
    apellido: 'Back',
    edad: 26,
    altura: 175,
    isDeveloper: true,
}

// New array from 2 objects
const amigos = [datos, datos_friend1, datos_friend2]
console.log(amigos)


const amigos_sort = amigos.sort((a, b) => b.edad - a.edad)
console.log(amigos_sort)