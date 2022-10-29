// Lists (arrays- arreglos - vectores)

let array = [1, 'hola', false, {id: 5}, null, undefined];

// Acceder a valores del array a traves de su posicion
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// Metodos para introducir nuevos valores
// .push() - .unshift() --> Mutan el valor del array
// .push() --> Añade un valor al final del array
array.push('final');

// .unshift() --> Añade un valor al principio del array
array.unshift('inicio');
console.log(array);

// Metodos para eliminar valores
// .pop() - .shift() --> Mutan el valor del array
const array2 = [1, 3, 'hola', false]
// .pop() --> Elimina el ultimo valor del array
array2.pop();
console.log(array2);

// .shift() --> Elimina el primer valor del array
array2.shift();
console.log(array2);

// Metodo para eliminar, modificar o añadir valores
// .splice() --> Mutan el valor del array
const array3 = [1, 2, 3, 4, 5, 6];

// Eliminar valores (indice, numero de elementos a eliminar)
array3.splice(2, 2);    // Elimina 2 valores a partir de la posicion 2
console.log(array3);

// Añadir valores (indice, numero de elementos a eliminar, valor a añadir)
array3.splice(2, 0, 'hola');    // Añade el valor 'hola' a partir de la posicion 2
console.log(array3);

// Modificar valores (indice, 1, valor a añadir)
array3.splice(2, 1, 3);    // Modifica el valor a partir de la posicion 2
console.log(array3);




