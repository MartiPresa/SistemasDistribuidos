var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question('Escriba el radio del círculo: ', function (r) {
console.log('El área es: ' + 3.14 * Math.pow(r, 2));
console.log('La circunferencia es: ' + 2 * 3.14 * r);
rl.close();
});

// Utiliza rl.question para mostrar el mensaje "Escriba el radio del círculo: " y 
// espera a que el usuario ingrese una respuesta. Cuando el usuario presiona Enter, 
// se ejecuta la función de devolución de llamada que recibe el valor r, que es el radio
//  ingresado por el usuario

