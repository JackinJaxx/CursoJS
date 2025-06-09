abrirCarro();
console.log("Hola desde javascript");

const nombre = "Jose Alejandro";

let edad = 22;

let mayorEdad = false; // boolean (false | true)

console.log("Mi nombre es " + nombre + " mi edad es " + edad + " " + mayorEdad);


// arrays
const nombres = [
    "Luis",
    "Pedro",
    "Ana",
    3
];
console.log("Los nombres son " + nombres);
console.log("Existen estos datos: " + nombres.length);
// agregar un dato en el array
// push es para agregar un elemento a la ultima posicion
// pop quita el ultimo elemento de la lista
// filter dependiendo de una condicion regresa ciertos datos de ese array
// for each - por cada elemento del array va ejecutar una accion
// indexOf - se pasa cierto elemento y si esta en el array devuelve la posicion
nombres.push("Juanito");
console.log("La lista despues de agregar" + nombres);

// objetos
// objetos se declaran con const recomendado

const persona = {} //esto ya es un objeto

// si quierne agregar datos


// se crea su referencia con const del objeto
const persona2 = {
    nombre : "Jose Alejandro",
    edad : 23,
    "Mi cumpleaños" : "08/04/2002"
}

//esto da error porque se esta asignando otra variable a esa
// persona = persona2;


console.log("Da error o no", persona2);

// declaro la propidad con  "" cuando quiero hacer explicita mi variable
// Edad | Mi propiedad

console.log("Mi objeto persona tiene " + persona2);
//console log se puede con + o con una ,
console.log("Las propiedades de mi objeto son: ", persona2, persona);

persona2.altura = 180;

console.log("Datos nuevos ", persona2);

// forEach por cada elemento del array ejecuta una accion
// filter

persona.nombre = persona2.nombre;
persona.edad = persona2.nombre;

// persona."Mi cumpleaños" = 

// si quiero asignar una propiedad con "" debo poner en lugar
// del punto . las llaves []

persona["Mi cumpleaños"] = persona2["Mi cumpleaños"];

console.log("Objeto persona antes no tenia nada ", persona);


const autosViejos = [];

const autosNuevos = [
    "Carro1",
    "Carro2",
    "Carro3"
]

// for each para arrays solo arrays y strings(no directamente)
autosNuevos.forEach( (elemento, index) => {
    console.log("Elemento: " ,elemento , "EL indice es", index);
});

// for normal en javascrip
let index = 0;
for (index; index < autosNuevos.length; index++) {
   console.log("elemento en for: ", autosNuevos[index]);
}

autosNuevos.forEach(elemento => {
    autosViejos.push(elemento)
})

console.log("Autos viejos: ", autosViejos);

// calcular el area de un triangulo y lo imprimen en consola
const base = 8;
const altura = 5;

const area = (base * altura) / 2;

console.log("El area es: ", area);

//operadores
// / para divirir
// * para multiplicar
// + para sumar no es concatenar
// - para restar

// estructuras de control 
// while, if, for, do while, switch, ternarios

// while

// let ciclo = true ;
// while(ciclo) {
//     console.log("Infinito");
// }

const miEdad = 18;

if(miEdad >= 18){
    console.log("Eres mayor de dad");
}else{
    console.log(); 
}

// ternarios la estructura seria la condicion ? (cuando sea true) : (cuando sea false)

const mensaje = miEdad>=18 ? "Eres mayor de edad" : "No eres mayor de edad";

console.log("Mensaje", mensaje);

// funciones , clases


function abrirCarro(parametro1, parametro2){
    console.log("Abri el carro");
    console.log("El primer parametro es: ", parametro1);
    console.log("El segundo es: ", parametro2);
}

abrirCarro(6,"Hola");

// no hay que espcificiar el retorno en la sintaxis de la funcion

// funciones de arrow
const abrirCasa = (parametro1, parametro2) => {
    console.log("Abri la casa");
    console.log("parametro1: ",parametro1);
    console.log("Parametro2: ", parametro2);
    
    
}
abrirCasa("Hola", "Alejandro");

//la function normal se puede mandar a llamar antes de su
// declaracion
//la funcion con arrow no se puede


const levantarme = ({
    parametro1 = "Hola", 
    parametro2
}
) =>{
    console.log("Param1: ", parametro1);
    console.log("Param2: ", parametro2);
}

levantarme({parametro2 : "Alejandro desde el 2"});
 
//se pueden mandar objetos por paremtros en las funciones
// igual arrays

const colores = [
    "azul",
    "blanco",
    "rojo",
    "verde"
]

// una funciona que tome un array y vea si existe el color rojo

const verificarColor = (dataArray) => {
    dataArray.forEach(element => {
        
    });
}


// callbacks, promises, await async

// manejo de dom











