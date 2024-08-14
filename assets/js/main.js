//1 Función tradicional con parametros
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3));

//Función flecha
const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(5, 3));


//2 Función con un parámetro por defecto
function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Roberto"));
console.log(saludar());



//3 Función con parámetros rest
function sumarVarios(...numeros) {
    return numeros.reduce((suma, num) => suma + num, 0);
}

console.log(sumarVarios(1, 2, 3, 4));
console.log(sumarVarios(5, 10));

