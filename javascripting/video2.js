/* 
-----------------MODULOS-----------------
Hay distintas formas de hacer modulos
Por defecto usa CommonJS y la que se define en el estandar es ES Modules
*/
//Usando CommonJS
/*En un archivo .js
const variableOculta = 'hola'

const suma = function(a ,b){
    return a + b
}
module.export = suma //solo se va a exportar la funcion suma */

//en otro archivo .js
const suma1 = requiere('./suma')
console.log(suma1(3,10)) // imprime 13

//Usando ECMAScript
/* En un archivo .mjs --> otra extension

const suma = function (a, b){
    return a + b
}

export default suma

--para importar--
import suma2 from './archivo.mjs'  */

/*otra forma
export { suma }
en este caso hay que importarlo utilizando el nombre especifico
import { suma } from './suma.mjs'
*/

/*
Para importar un modulo nativo basta con poner el nombre del modulo
y como node no lo encuentra localmente, lo va a buscar al modulo nativo

const fs = requiere('fs') */

/*
-----------------PAQUETES-----------------
Es una capa de abstraccion mas dentro de la modularizacion de un programa.
Los paquetes contienen modulos.
Nos facilitan la organizacion, distribucion y la modularizacion

NPM: gestos de paquetes de Node, contiene muchos paquetes y librerias para
utilizar en nuestros proyectos.

crear un paquete:
npm init

instalar un paquete
npm i <paquete> (si agregamos -g es de npm global, sino es local)

desintalar un paquetes
npm unistall <paquete> [-g]
*/

/*
-----------------OBJETOS-----------------
En js todos son objetos y se van copiando objetos que son PROTOTIPOS-

Mixins: heredar los metodos y propiedades de varios objetos

Hay distintas formas de definir un objeto

const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function (){
        console.log('Hola!')
    }
}

o sino:

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

Crear atributos con claves dinamicas

const persona = {}
const var1 = 'nombre'
const var2 = 'edad'

persona[var1] = 'Juan'
persona[var2] = 30

--Funciones constructoras

const persona = function(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.saludar = function() {
        console.log(`Hola soy ${this.nombre}!`) //esta forma permite usar los atributos en las funciones 
    }
}

para crear el objeto tenemos que usar la palabra clave NEW
const persona1 = new persona('Juan', 30)
persona1.saludar()

-----------------PROTOTIPOS-----------------
usando la funcion constructora del ejemplo anterior:

const persona 1 = new persona('Juan', 30)
const persona 1 = new persona('Maria', 22)

persona2.saludar = function () {
    console.log('Chau ${this.nombre}')
}

persona1.saludar() // Hola Juan
persona2.saludar() // Chau Maria

Todas las propiedades se estan guardando en cada objeto, inclusive los metodos.
y como los metodos no deberian cambiarn entre objetos, sino las propiedades, entonces
utilizamos PROTOTIPOS.
Los prototipos son plantillas que tienen las funciones constructoras, de la cual cada objeto
hereda las propiedades cada vez que utilizamos la palabra NEW.

Entonces, si hacemos:

persona.prototype.saludar = function() {
    console.log('Hola ${this.nombre}')
}

const persona 1 = new persona('Juan', 30)
const persona 1 = new persona('Maria', 22)

persona1.saludar() //Hola Juan
persona2.saludar() //Hola Maria

y luego :

persona.prototype.saludar = function() {
    console.log('Chau ${this.nombre}')
}

persona1.saludar() //Chau Juan
persona2.saludar() //Chau Maria

Se modifica el metodo para TODOS los objetos persona.

-----------------CLASES-----------------

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

-----------------HERENCIA SIMPLE-----------------
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

-----------------HERENCIA MULTIPLE (MIXINS)-----------------
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

-----------------ITERABLES-----------------
Arrays
const myArray = [1,2,3]

*Agregar al final del array
myArray.push(4) 

*Eliminar un elemento
myArray.splice(6,1) //eliminamos 1 elemento desde la posicion 6

*iterar
myArray.forEach(function(value,index) {
    console.log(`posicion ${index}: ${value}`)
})
*/

