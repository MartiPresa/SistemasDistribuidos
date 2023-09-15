/* Funcion callback
Una función de callback es una función que se pasa a otra función como un argumento, que
luego se invoca dentro de la función externa para completar algún tipo de rutina o acción
*/

//Funcion callback 
function imprimir(nombre) {
    console.log('Marti ' + nombre);
}

tiempoEnMilisegundos= 3000;

function procesar(callback) {
    var nombre = 'Trolo';
    //setTimeout(callback(nombre),tiempoEnMilisegundos)
    callback(nombre);
}

// setTimeout(procesar(imprimir), tiempoEnMilisegundos);
// procesar(imprimir);
 
// Callback asincronico
setTimeout(() =>{
    procesar(imprimir);
}, tiempoEnMilisegundos);

//procesar(imprimir);
console.log('Re si');

// Declarar función
// function obtenerDatos(callback) {
//     setTimeout(() => {
//       const datos = {nombre: "John", edad: 30};
//       callback(datos);
//     }, 3000);
//   }
  
//   // Ejecutar función con una callback
//   obtenerDatos(function(datos) {
//     console.log(datos);
//   });
  
//   console.log("Se están obteniendo los datos...");