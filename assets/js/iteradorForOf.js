//Iterar un array con acceso a índices usando for
function iterarConFor() {
    const numeros = [10, 20, 30];

    //Iterar sobre cada elemento del array con for y acceso a los índices!!!
    for (let i = 0; i < numeros.length; i++) {
        console.log(`Índice: ${i}, Valor: ${numeros[i]}`);
    }
}

//Iterar un array sin acceso a índices usando for...of
function iterarConForOf() {
    const numeros = [10, 20, 30];

    //Iterar sobre cada elemento del array con for...of
    for (const numero of numeros) {
        console.log(numero);
    }
}

function ejecutar() {
    console.log("Ejemplo de iteración con índices usando for:");
    iterarConFor();

    console.log("\nEjemplo de iteración sin índices usando for...of:");
    iterarConForOf();
}

ejecutar();
