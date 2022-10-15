// labels en los bucles -- permite nombrar los bucles

//Ejemplo sin labels
// ` = backtick --> ctrl + alt + curly braces --> `
let unidades = 0;
let decenas = 0;

while(true) {
    while (true) {
        console.log(`El valor actual es: ${decenas}${unidades}`);
        unidades++
        if (unidades === 10) {
            unidades = 0;
            break;
        }
    }
    decenas++
    if (decenas === 2) {
        break;
    }
}

//Ejemplo con labels
let unidades2 = 0;
let decenas2 = 0;

bucleDecenas: while(true) {
    bucleUnidades: while (true) {
        console.log(`El valor actual es: ${decenas2}${unidades2}`);
        unidades2++
        if (unidades2 === 10) {
            unidades2 = 0;
            break bucleUnidades;
        }
        if (decenas2 === 2) {
            break bucleDecenas;
        }
    }
    decenas2++
}
