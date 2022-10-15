// Bucles For

// for (inicializacion; condicion; actualizacion)

for (let i = 0; i < 10; i++) {  // i++ es igual que i += 1
  console.log(i);
}

let lista = [1, 4, 6, 7, 10, 12];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

// For ... of
for (let valor of lista) {
  console.log(valor);
}

// ForEach
lista.forEach(valor => {
    console.log(valor)
})

// For ... in

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    isDeveloper: true
}

for (let propiedad in persona) {
    console.log(persona[propiedad])
}