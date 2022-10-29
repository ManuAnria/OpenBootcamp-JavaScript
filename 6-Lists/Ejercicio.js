const compras = ['arroz', 'queso', 'carne', 'jabon', 'frutas', 'galletas']

compras.push('Aceite de Girasol')
console.log(compras)

compras.pop()
console.log(compras)


const pelis = [
    {titulo: 'Avengers: Endgame', director: 'Kevin Feige', fecha: 2018},
    {titulo: 'Black Panther', director: 'Ryan Coogler', fecha: 2018},
    {titulo: 'Dr Strange', director: 'Scott Derrickson', fecha: 2016},
    {titulo: 'Volver al futuro', director: 'Robert Zemeckis', fecha: 1985},
]

const pelisViejas = pelis.filter(peli => peli.fecha < 2010)
console.log(pelisViejas)

const directores = pelis.map(peli => peli.director)
console.log(directores)

const titulos = pelis.map(peli => peli.titulo)
console.log(titulos)

const combinada = titulos.concat(directores)
console.log(combinada)

const combinada2 = [...titulos, ...directores]
console.log(combinada2)