// Funciones anonimas --> Funciones lambda

const funcionAnonima = function() {
    // Código de la función aquí
  };

const funcionAnonimaFlechita = () => { // TIENE EL RETURN IMPLICITO
    // Código de la función aquí
  };
  // Con un solo parámetro
  const cuadrado = (x) => x * x;
  // Con varios parámetros
  const suma = (a, b) => a + b;
  
  // Ejemplo de uso en un array
  const numeros = [1, 2, 3, 4, 5];
  const cuadrados = numeros.map((num) => num * num);

saludar1('Cami 1')

// Declaracion de funcion --> esta disponible en todo el ambito
function saludar1(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludar("Cami 2 ");


// Expresion de funcion --> solo disponible debajo de su declaracion
const saludar = function(nombre) {
    console.log(`Hola, ${nombre}!`);
};

saludar('Cami 3');