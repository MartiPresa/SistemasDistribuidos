// funcion callback


function imprimir(nombre) {
    console.log('Hola ' + nombre);
}

    
function procesar(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}

procesar(imprimir);