var readline = require('readline');
// se importan las funciones del archivo circle.js
var circle = require('./circle.js');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question('Escriba el radio del círculo: ', function (r) {
console.log('El área es: ' + circle.area(r));
console.log('La circunferencia es: ' + circle.circumference(r));
rl.close();
});



