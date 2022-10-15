// Casos especificos - break y continue -- No son consideradas buenas practicas
let lista = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] == 3) {
        continue;
    }

    console.log(lista[i])
    if (lista[i] > 5) {
        break;
    }
}


// ambito (alcance) de un bucle
console.log(i)  
// not defined porque se declaro dentro del bucle, como let. Si se declara como var, si se puede acceder a ella fuera del bucle
