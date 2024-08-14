// Definir clase Animal
class Animal {
    constructor(nombre, tipo = "Desconocido", edad = 0) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }

    describir() {
        return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Edad: ${this.edad} años.`;
    }
}

// Definir clase Perro que extiende de Animal
class Perro extends Animal {
    // Definir constructor con parámetros adicionales y parámetros por defecto
    constructor(nombre, edad, raza = "Mestizo") {
        // Llamar al constructor de la clase padre con parámetros específicos
        super(nombre, "Perro", edad);
        // Asignar valor a la propiedad raza
        this.raza = raza;
    }

    describir() {
        return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Edad: ${this.edad} años, Raza: ${this.raza}.`;
    }
}

// Definir clase Gato que extiende de Animal
class Gato extends Animal {
    // Definir constructor con parámetros adicionales y parámetros por defecto
    constructor(nombre, edad = 0, color = "Desconocido") {
        super(nombre, "Gato", edad);
        // Asignar valor a la propiedad color
        this.color = color;
    }

    describir() {
        console.log("Clase Gato, describir")
        console.log(this.edad)

        return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Edad: ${this.edad} años, Color: ${this.color}.`;
    }
}

// Crear lista para almacenar los animales
const listaAnimales = [];

// Definir función para agregar un nuevo animal
function agregarAnimal() {
    // Solicitar tipo de animal al usuario
    const tipoAnimal = prompt("¿Qué tipo de animal quieres agregar? (Perro/Gato)");

    if (tipoAnimal.toLowerCase() === "perro") {
        // Solicitar datos para crear un objeto de la clase Perro
        const nombre = prompt("Ingrese el nombre del perro:");
        const edad = parseInt(prompt("Ingrese la edad del perro:"));
        const raza = prompt("Ingrese la raza del perro:") || undefined;

        // Crear instancia de Perro y agregar a la lista
        const perro = new Perro(nombre, edad, raza);
        listaAnimales.push(perro);
    }
    // Evaluar si el tipo de animal es gato
    else if (tipoAnimal.toLowerCase() === "gato") {
        // Solicitar datos para crear un objeto de la clase Gato
        const nombre = prompt("Ingrese el nombre del gato:");
        const edad = parseInt(prompt("Ingrese la edad del gato:")) || 0 ;
        const color = prompt("Ingrese el color del gato:") || undefined;

        console.log("Cerando un gato")
        console.log(edad)

        // Crear instancia de Gato y agregar a la lista
        const gato = new Gato(nombre, edad, color);
        listaAnimales.push(gato);
    }
    // Mostrar alerta si el tipo de animal no es reconocido
    else {
        alert("Tipo de animal no reconocido.");
    }
}

// Definir función para mostrar la lista de animales ingresados
function mostrarAnimales() {
    // Inicializar mensaje para mostrar la lista de animales
    let mensaje = "Animales ingresados:\n";
    // Iterar sobre listaAnimales y concatenar descripciones al mensaje
    listaAnimales.forEach(animal => {
        mensaje += `${animal.describir()}\n`;
    });
    alert(mensaje);
}

// Ejecutar ejemplo agregando un animal y mostrando la lista
agregarAnimal();
mostrarAnimales();
