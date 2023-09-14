var readline = require('readline');

console.log("xd");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escriba el radio del círculo: ', function (r) {
    console.log('El área es: ' + 3.14 * Math.pow(r, 2));
    console.log('La circunferencia es: ' + 2 * 3.14 * r);
    rl.close();
});