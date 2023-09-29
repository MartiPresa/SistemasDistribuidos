/* 
-----------------MODULOS-----------------
Hay distintas formas de hacer modulos
Por defecto usa CommonJS y la que se define en el estandar es ES Modules
*/
//Usando CommonJS
//En un archivo .js

const variableOculta = 'hola'

const suma = function(a ,b){
    return a + b
}
module.export = suma //solo se va a exportar la funcion suma */

//en otro archivo .js
const suma1 = requiere('./suma')
console.log(suma1(3,10)) // imprime 13

//Usando ECMAScript
//En un archivo .mjs --> otra extension

const suma = function (a, b){
    return a + b
}

export default suma

//--para importar--

import suma2 from './archivo.mjs' 

//otra forma
export { suma }
//en este caso hay que importarlo utilizando el nombre especifico
import { suma } from './suma.mjs'


/*
Para importar un modulo nativo basta con poner el nombre del modulo
y como node no lo encuentra localmente, lo va a buscar al modulo nativo
*/
const fs = requiere('fs') */

/*
-----------------PAQUETES-----------------
Es una capa de abstraccion mas dentro de la modularizacion de un programa.
Los paquetes contienen modulos.
Nos facilitan la organizacion, distribucion y la modularizacion

NPM: gestos de paquetes de Node, contiene muchos paquetes y librerias para
utilizar en nuestros proyectos.
*/

//crear un paquete:
npm init

//instalar un paquete
npm i <paquete> (si agregamos -g es de npm global, sino es local)

//desintalar un paquetes
npm unistall <paquete> [-g]


/*
-----------------OBJETOS-----------------
En js todos son objetos y se van copiando objetos que son PROTOTIPOS-

Mixins: heredar los metodos y propiedades de varios objetos

Hay distintas formas de definir un objeto
*/

const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function (){
        console.log('Hola!')
    }
}

//o sino:

const nombre = 'Juan'
const edad = 30
const saludar = function(){
    console.log('Hola!')
}

const persona = {
    nombre,
    edad,
    saludar
}

persona.saludar() //llama al metodo del objeto

//Crear atributos con claves dinamicas

const persona = {}
const var1 = 'nombre'
const var2 = 'edad'

persona[var1] = 'Juan'
persona[var2] = 30

//--Funciones constructoras

const persona = function(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.saludar = function() {
        console.log(`Hola soy ${this.nombre}!`) //esta forma permite usar los atributos en las funciones 
    }
}

//para crear el objeto tenemos que usar la palabra clave NEW
const persona1 = new persona('Juan', 30)
persona1.saludar()

//-----------------PROTOTIPOS-----------------
//usando la funcion constructora del ejemplo anterior:

const persona1 = new persona('Juan', 30)
const persona2 = new persona('Maria', 22)

persona2.saludar = function () {
    console.log('Chau ${this.nombre}')
}

persona1.saludar() // Hola Juan
persona2.saludar() // Chau Maria

/*
Todas las propiedades se estan guardando en cada objeto, inclusive los metodos.
y como los metodos no deberian cambiarn entre objetos, sino las propiedades, entonces
utilizamos PROTOTIPOS.
Los prototipos son plantillas que tienen las funciones constructoras, de la cual cada objeto
hereda las propiedades cada vez que utilizamos la palabra NEW.
*/

//Entonces, si hacemos:

persona.prototype.saludar = function() {
    console.log('Hola ${this.nombre}')
}

const persona1 = new persona('Juan', 30)
const persona2 = new persona('Maria', 22)

persona1.saludar() //Hola Juan
persona2.saludar() //Hola Maria

//y luego :

persona.prototype.saludar = function() {
    console.log('Chau ${this.nombre}')
}

persona1.saludar() //Chau Juan
persona2.saludar() //Chau Maria

//Se modifica el metodo para TODOS los objetos persona.

//-----------------CLASES-----------------

class Persona {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    sayHello() {
        console.log(`Hola soy ${this.firstName} ${this.lastName}`)
    }
}

const juan = new Persona('Juan', 'Perez')
const pedro = new Persona('Pedro', 'Perez)

juan.sayHello() // Hola soy Juan Perez

//-----------------HERENCIA SIMPLE-----------------
class Doctor extends Persona{
    constructor(firstName, lastName) {
        super(firstName, lastName)
    }

    trabajar() {
        console.log('A curar!')
    }
}

const doctor = new Doctor('Juan', 'Doctor')

doctor.sayHello() //Hola soy Juan Doctor
doctor.trabajar() // A curar!

//-----------------HERENCIA MULTIPLE (MIXINS)-----------------
const Deportista = {
    entrenar: () => { //funcion flechita
        console.log('Entrenando')
    }

    estirar: () => {
        console.log('Estirando!')
    }
}

Object.assign(doctor, Deportista)
doctor.sayHello() //Hola soy Juan Doctor
doctor.trabajar() // A curar!
doctor.entrenar() // Entrenando
doctor.estirar() // Estirando!

//-----------------ITERABLES-----------------
Arrays
const myArray = [1,2,3]

//*Agregar al final del array
myArray.push(4) 

//*Eliminar un elemento
myArray.splice(6,1) //eliminamos 1 elemento desde la posicion 6

//*iterar
myArray.forEach(function(value,index) {
    console.log(`posicion ${index}: ${value}`)
})

//*transformar el array a un nuevo array con las potencias de 2
const myArray2 = myArray.map(function(value, index) {
    return Math.pow(value, 2)
})

//*filtrar
const myArray3 = myArray.filter(function(value, index) {
    return value % 2 === 0
})

//*encontrar
//*Usando find --> si no lo encuentra devuelve undefined
const enc = myArray.find(function(value, index) {
    retrun value === 7
}) // guarda el index del elemento encontrado

//*Usando findIndex -->si no encuentra, devuelve -1

//*reducir
const acumulado = myArray.reduce(function(acc, value, index) {
    return acc + value
}, 0) --> segundo parametro: valor inicial
acc --> valor acumulado de la iteracion anterio r

//----------------- MAPS -----------------
//*Son como el hashmap
const myMap = new Map();

console.log('Maps');
myMap.set('clave1', 1);;
myMap.set('clave2', 1);
myMap.set('clave1', 2); --> modifica el existente, no repite claves

//----------------- SETS -----------------
//*Estructuras de datos que no tienen elementos repetidos
const mySet = new Set();

console.log('Sets');
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet.values());
console.log(mySet.has(3));

//----------------- PASO DE ARGUMENTOS -----------------
//*EJEMPLO 1
function myFn(_a) {
  _a = 2;
}

let a = 1;
myFn(a);
console.log(a) // 1

//*EJEMPLO 2

function myFn(_a) {
  _a.prop = 2;
}

let a = {
  prop: 1
};
myFn(a); 
console.log(a) //{prop: 2} --> cambio

/*
En js, todas las variables son referencias a las direcciones donde esta alojado el valor de esa variable
entonces, tanto en el EJEMPLO 1 como en el 2, ambas variables son referencias a una direccion donde
esta el valor, y cuando llamamos a una funcion estamos creando una copia de esa referencia:
en function myFn(_a) --> _a es una copia de la referencia de la variable pasada por parametro, por eso 
podemos acceder al mismo valor
En los obj, cuando cambiamos una propiedad estamos reasignando un nuevo valor a la referencia, entonces
como los valores primitivos de js no son mutables, estamos creando una nueva direccion con un nuevo valor
y luego la referencia apunta a esa nueva direccion.Entonces

Estos apuntan a lugares diferentes
*/
function myFn(_a) {
  _a = 2;
}

let a = 1;


//pero estos apuntan al mismo lugar:
function myFn(_a) {
  _a.prop = 2;
}

let a = {
  prop: 1
};


//*part 3

function myFn(_a) {
  _a = { prop: 3 };
}

let a = {
  prop: 1
};
myFn(a);
console.log(a) // {prop: 1} --> no se modifica porque sigue apuntando a la referencia 

/*----------------- IIFE -----------------
Inmidiately Invoked Function Expressions
Se usan mucho para encapsular 
-los archivos de node se ejecutan utilizando estas funciones, encapsula nuestro codigo
y lo ejecuta inmediatamente
*/

(function iife() {
  var text = 'Hello world';
  console.log(text);
})();


//*pasandole argumentos
(function iife(text) {
  console.log(text);
})('Bye bye!');

/*----------------- FUNCIONES ANONIMAS (lambda) -----------------
Funciones que no tienen nombre, se suelen usar para pasarse por argumentos*/

const myArray = [ 1, 2, 3, 4, 5, 6 ];

const acumulado = myArray.reduce(function (acc, value, index) {
  return acc + value;
}, 0);

//*No es una funcion lambda
function acumuladorNoAnonimo(acc, value, index) {
  return acc + value;
}
const acumuladoNoAnonimo = myArray.reduce(acumuladorNoAnonimo, 0);

/*----------------- CALLBACKS & LAMBDA -----------------
Funciones que se pasan como argumentos (muchas pueden ser anonimas) y se las llama 
dentro de la funcion que las tiene como argumentos*/

/**callback lambda
*Es una convencion de node que las callback tengan como primer argumento err, que indica si hubo un error*/
fs = require('fs')
fs.readFile('./text.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

//*callback no lambda
fs = require('fs')

function imprimeArchivo(err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
}

fs.readFile('./text.txt', 'utf8', imprimeArchivo);

/*----------------- ARROW FUNCTIONS -----------------
Forma moderna de escribir funciones, omite la palabra function y la reemplaza por un =>

*version anterior*/
const myFn = function () {
  console.log('classic');
}

//*arror function
const myFn2 = () => {
  console.log('modern');
}

myFn();
myFn2();

//* arrow functions con argumentos
const suma = function (a, b) {
  return a + b;
}

//*Si tiene solo una linea podemos omitir el return y devuelve directamente el resultado
const suma2 = (a, b) => a + b;


//*objeto this

//*funcion constructora
const persona = function (nombre) {
  this.nombre = nombre;
};

//*diferencia entre function y arrow function respecto del 'this'
(function () {

  this.nombre = 'Pedro';

  persona.prototype.saludo = () => {
    console.log(`Hola ${this.nombre}`); // imprime hola undefined porque el 'this' lo toma como la funcion iife
  }

})();

const persona1 = new persona('Juan');
persona1.saludo();

/*-----------------SCOPES-----------------

this
-En un browser hace referencia al objeto global
-En un modulo de node hace referencia al modulo que exporta
-En una funcion hace referencia al objeto global
-En un metodo, hace referencia al objeto dueño

*Objeto global window de un browser
-No hay diferencia entre poner window o poner this
-No hay diferencia entre declarar una variable con 'var' o no poner nada, ambas pasan a formar
parte del objeto global

*Objeto global de node
- No tenemos el objeto window, sino que tenemos el objeto 'global'
- Si no ponemos 'var' se va a asignar la variable como un miembro del objeto global
- Si ponemos 'var' NO la va a asignar como miembro del objeto global
*/

myVar = 1;
var myVar2 = 2;
let myVar3 = 3;

console.log(global.myVar1); //1
console.log(global.myVar2); //undefined
console.log(global.myVar3); //undefined

//this no hace referencia al objeto global de node
console.log(this===global) //false


/*El global scope (en browser y node) es un scope que podemos acceder desde cualquier lugar desde 
nuestro codigo y son todos los miembros que tiene el objeto global

*Scope de funcion*/
if (true){
    var myVar0 = 0;
}

function myFn(){
    var myVar1 = 1;
    console.log('Dentro de la funcion ', myVar0); //0
    console.log('Dentro de la funcion ', myVar1); //1
}

myFn();

console.log('Fuera de la funcion ', myVar0); //0
console.log('Fuera de la funcion ', myVar1); //undefined porque esta declarada dentro de una funcion

/*Lexical scope y Scope chain
- Se puede acceder a las variables declaradas en el scope padre.*/

function myFn(){
    let myVar = 1
    console.log('Dentro de la funcion ', myVar1);

    function myFn2(){
        console.log('Dentro de la sub-funcion ', myVar1);
    }

    myFn2()
}

myFn()


//Closures
function myFn(){
    var myVar = 1
    console.log('Dentro de la funcion ', myVar1);

    return myFn2(){
        console.log('Dentro de la sub-funcion ', myVar1);
    }

}

const fn = myFn() //dentro de la funcion 1
console.log('Ya termino de ejecutar myFn()') //ya termino de ejecutar
fn() //dentro de la subfuncion 1

/*
-Por mas que el contexto de ejecucion de la funcion padre haya finalizado gracias al scope chain
una funcion hija puede seguir accediendo a las variables declaradas anteriormente

*Hoisting
Permite utilizar funciones o variables antes de que esten declaradas en el codigo*/

hoistingExample1('Juan'); //Hola Juan
console.log(hoistingExample2); //undefined 
//sabe que hay un espacio reservado para esa variable pero no se le asigno valor todavia

function hoistingExample1 (name){
    console.log('Hola ',name)
}

var hoistingExample2 = 'valor de hoisting'

hoistingExample1('Juan'); //Hola Juan
console.log(hoistingExample2); //valor de hoisting

/*JS se guarda un espacio para las funciones y variables que vamos a usar como hoisting, almacena la
funcion entera pero en las variables solo asigna la declaracion y no el valor */


