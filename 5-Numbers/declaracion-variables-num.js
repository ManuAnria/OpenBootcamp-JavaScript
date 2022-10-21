// Numbers

//Precision
let a = 0.1
let b = 0.2
console.log(a+b)    //Por la configuracion del lenguaje y la memoria que asigna a cada variable, no se puede representar el numero exacto de 0.3

console.log(Math.round((a + b)*100)/100) //Para solucionar el problema de la precision, se puede redondear el resultado a 2 decimales