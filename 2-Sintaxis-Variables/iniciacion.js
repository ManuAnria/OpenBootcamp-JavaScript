// Tipos primitivos

//number
4;

//string
"Hello World";
'Hello World';

//boolean
true;
false;

//null e undefined
null;
undefined;

//null, undefined, false, 0 --> todas son falsy
if (null) { //lo mismo si pongo undefined, false, 0
    console.log('cumple');
} else {
    console.log('no cumple');
}

console.log(null == undefined); //null no es igual a undefined,
