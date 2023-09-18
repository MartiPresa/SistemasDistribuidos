
//Tipo de variables (y scope)
//const --> no pueden reasignarse valores
const x = 'valor constante'

if (true){
    var globalVar = 1;
    let scopeVar = 1
    console.log('Dentro del block var: ',globalVar);
    console.log('Dentro del block let: ',scopeVar);
}

console.log('Fuera del block var: ',globalVar);
console.log('Fuera del block let: ',scopeVar);

/*
var declara las variables con un scope global
let decalara las varibales con un scope de bloque
*/

//Formas de declarar una funcion
function example(name){
    console.log('Hello!, ',name);
}

const functionAsVar = function (name){
    console.log('Hello!, ',name);
}

/* Operadores logicos
1 == 1 --> true
1 != 2 --> true
2 > 1 --> true
2 < 1 --> false
2 >= 2 --> true
2 == true --> false
cuando pasa eso js intenta convertir el boolean a un valor numerico (true = 1)
1 == true --> true
1 == '1' --> true
1 === '1' --> false (=== hace comparacion de tipos tmb)
1 !== '1' --> true
*/

//Concatenación
const var1 = 'hola';
const var2 = 'wacho';

const concat1 = var1 + ' ' + var2;
const concat2 = `${var1} ${var2}`;

//Tipado debil y dinamico
/*
se le pueden asignar distintos tipos de datos
a una misma variable */ 
let a = 2;
console.log(a);
x = 'string';
console.log(x);

//Operadores mixtos
/*
el + funciona como operador de suma o como operador de concatenacion
y cuando hay un string, predomina la concatenacion */
console.log(1 + '1') // resultado: '11'
console.log('a' + true) // resultado: 'atrue
/*
en cambio, cuando hay un -, solo puede funcionar como una resta. Entonces
fuerza al caracter a convertirse a numerico */
console.log(1 + '1') // resultado: 0

/*
En el caso de sumar un booleano con un numero, convierte el booleno a numerico*/
console.log(true + 1) // resultado: 2

/* CASO ESPECIAL
como el primer operando es un string, va a convertir todo a texto y los concatena*/
console.log('a' + 1 + true) // resultado: a1true

/*
como empieza sumando un numero y un booleando, primero se suman esos operandos y después
se concatena al string */
console.log(1 + true + 'a') // resultado: 2a

//Evaluacion de expresiones
console.log(true ? 'true': 'false') //true
console.log(false ? 'true': 'false') //false
console.log(1 ? 'true': 'false') //true
console.log(0 ? 'true': 'false') //false
console.log('' ? 'true': 'false') //false
console.log(undefined ? 'true': 'false') //false
console.log(null ? 'true': 'false') //false
console.log([1].length ? 'true': 'false') //true
console.log([].length ? 'true': 'false') //false
