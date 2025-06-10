// abrirCarro();
// console.log("Hola desde javascript");

// const nombre = "Jose Alejandro";

// let edad = 22;

// let mayorEdad = false; // boolean (false | true)

// console.log("Mi nombre es " + nombre + " mi edad es " + edad + " " + mayorEdad);


// // arrays
// const nombres = [
//     "Luis",
//     "Pedro",
//     "Ana",
//     3
// ];
// console.log("Los nombres son " + nombres);
// console.log("Existen estos datos: " + nombres.length);
// // agregar un dato en el array
// // push es para agregar un elemento a la ultima posicion
// // pop quita el ultimo elemento de la lista
// // filter dependiendo de una condicion regresa ciertos datos de ese array
// // for each - por cada elemento del array va ejecutar una accion
// // indexOf - se pasa cierto elemento y si esta en el array devuelve la posicion
// nombres.push("Juanito");
// console.log("La lista despues de agregar" + nombres);

// // objetos
// // objetos se declaran con const recomendado

// const persona = {} //esto ya es un objeto

// // si quierne agregar datos


// // se crea su referencia con const del objeto
// const persona2 = {
//     nombre : "Jose Alejandro",
//     edad : 23,
//     "Mi cumpleaños" : "08/04/2002"
// }

// //esto da error porque se esta asignando otra variable a esa
// // persona = persona2;


// console.log("Da error o no", persona2);

// // declaro la propidad con  "" cuando quiero hacer explicita mi variable
// // Edad | Mi propiedad

// console.log("Mi objeto persona tiene " + persona2);
// //console log se puede con + o con una ,
// console.log("Las propiedades de mi objeto son: ", persona2, persona);

// persona2.altura = 180;

// console.log("Datos nuevos ", persona2);

// // forEach por cada elemento del array ejecuta una accion
// // filter

// persona.nombre = persona2.nombre;
// persona.edad = persona2.nombre;

// // persona."Mi cumpleaños" = 

// // si quiero asignar una propiedad con "" debo poner en lugar
// // del punto . las llaves []

// persona["Mi cumpleaños"] = persona2["Mi cumpleaños"];

// console.log("Objeto persona antes no tenia nada ", persona);


// const autosViejos = [];

// const autosNuevos = [
//     "Carro1",
//     "Carro2",
//     "Carro3"
// ]

// // for each para arrays solo arrays y strings(no directamente)
// autosNuevos.forEach( (elemento, index) => {
//     console.log("Elemento: " ,elemento , "EL indice es", index);
// });

// // for normal en javascrip
// let index = 0;
// for (index; index < autosNuevos.length; index++) {
//    console.log("elemento en for: ", autosNuevos[index]);
// }

// autosNuevos.forEach(elemento => {
//     autosViejos.push(elemento)
// })

// console.log("Autos viejos: ", autosViejos);

// // calcular el area de un triangulo y lo imprimen en consola
// const base = 8;
// const altura = 5;

// const area = (base * altura) / 2;

// console.log("El area es: ", area);

// //operadores
// // / para divirir
// // * para multiplicar
// // + para sumar no es concatenar
// // - para restar

// // estructuras de control 
// // while, if, for, do while, switch, ternarios

// // while

// // let ciclo = true ;
// // while(ciclo) {
// //     console.log("Infinito");
// // }

// const miEdad = 18;

// if(miEdad >= 18){
//     console.log("Eres mayor de dad");
// }else{
//     console.log(); 
// }

// // ternarios la estructura seria la condicion ? (cuando sea true) : (cuando sea false)

// const mensaje = miEdad>=18 ? "Eres mayor de edad" : "No eres mayor de edad";

// console.log("Mensaje", mensaje);

// // funciones , clases


// function abrirCarro(parametro1, parametro2){
//     console.log("Abri el carro");
//     console.log("El primer parametro es: ", parametro1);
//     console.log("El segundo es: ", parametro2);
// }

// abrirCarro(6,"Hola");

// // no hay que espcificiar el retorno en la sintaxis de la funcion

// // funciones de arrow
// const abrirCasa = (parametro1, parametro2) => {
//     console.log("Abri la casa");
//     console.log("parametro1: ",parametro1);
//     console.log("Parametro2: ", parametro2);
    
    
// }
// abrirCasa("Hola", "Alejandro");

// //la function normal se puede mandar a llamar antes de su
// // declaracion
// //la funcion con arrow no se puede


// const levantarme = ({
//     parametro1 = "Hola", 
//     parametro2
// }
// ) =>{
//     console.log("Param1: ", parametro1);
//     console.log("Param2: ", parametro2);
// }

// levantarme({parametro2 : "Alejandro desde el 2"});
 
// //se pueden mandar objetos por paremtros en las funciones
// // igual arrays

// const colores = [
//     "azul",
//     "blanco",
//     "negro",
//     "verde"
// ]

// // una funciona que tome un array y vea si existe el color rojo

// const verificarColor = (dataArray) => {
//     let isRed = false;

//     dataArray.forEach(element => {
//         if(element === "rojo"){
//             isRed = true;
//         }
//     });

//     console.log("Existe? : ",isRed);
// }
// verificarColor(colores);

// // signo de comparacion == ===
// // == checa el valor de las variables a comparar
// // === hace lo mismo pero toma en cuenta el tipo de variable

// let x = 10;
// let y = "10";

// if(x === y){
//     console.log("Es igual");
// }else{
//     console.log("No es igual");
// }


// //direccion de memoria 0023
// const obj1 = {
//     nombre: "Ana"
// }

// //direccion de memoria 0024
// const obj2 = {
//     nombre: "Ana"
// }

// const resultado = obj1 == obj2 ? "Es igual" : "No es igual";

// console.log("Resultado: ",resultado);

// const persona4 = {
//     edad: 30
// }

// const otraReferencia = persona4;

// //asigne un valor
// otraReferencia.nombre = "Prueba";

// console.log(persona4 == otraReferencia);

// console.log("El objeto persona4: ", persona4);

// //al asignar un objeto a una variable se tiene acceso como referencia no 
// //como copia

// //asignacion por copia

// const telefono = {
//     nombre : "Ios",
//     año : 2002
// }

// // esta estructura es para copiar un objeto Object.assign({}, objeto)
// const telefono2 = Object.assign({}, telefono);
// // const telefono2 = telefono;
// telefono2.año = 2010;

// console.log("Objeto telefono: ", telefono);
// console.log("Objeto telefono2: ", telefono2);

// //dada un array de numeros con 2 , 3, 5, 9, 10 multiplicar
// // cada elemento por 3 y mostrar ese nuevo array modificado

// const numeros2 = [
//     2,3,5,9,20
// ]

// // map, este metodo de los arrays te permite modificar cada element
// // y hacer una operacion (transformarlo)
// // map(elemento => elemento * 3);

// const numerosTransformados = numeros2.map(elemento => elemento * 3);

// console.log("Numeros transformados: ", numeros2);
// console.log("Numeros ahora si transformados: ", numerosTransformados);


// // objetos agregar funciones

// const carroNuevo = {
//     "nombre": "A1",
//     "año": 2023,
//     "moverse" : () => {
//         return "Estoy moviendome"
//     }
// }

// const mensaje10 = carroNuevo["moverse"]();

// console.log("El mensaje desde una propiedad de un objeto que contiene una funcion es: ", mensaje10);

// const objetoPadre = {
//     nombre : "Soy el padre",
//     hijo : {
//         nombre : "Soy el hijo"
//     }
// }
// // se puede anidar un objeto en otro objeto

// // callbacks, promises, await async

// //callbacks
// // es cuando mando a llamar una funcion en otra funcion
// // funcionA mandarla a llamar en funcionB

// const funcionA = () => {
//     console.log("Hola me ejecuto desde funciona A");
// }

// const funcionB = (parametro1) => {
//     console.log("HOla me ejecuto desde funcion B");
//     parametro1();
// }

// // funcionB(funcionA);


// // pasar paremetors en un callback
// const funcionC = (parametro1) => {
//     console.log("Hola me ejecuto desde funciona C" + parametro1);
// }

// const funcionD = (parametro1) => {
//     console.log("HOla me ejecuto desde funcion D");
//     parametro1("Te mando este mensaje desde funcionD");
// }

// funcionD(funcionC);


// //asyncronia

// // suma
// // multiplicacion
// // si quiero hacer las dos ala vez
// // si quiero que la suma se ejecute 5 segundos despues tendria que ser algo asincrono
// //que el hilo principal del programa no se bloquee

// // promesas


console.log("Me ejecute 5 segundos despues");

console.log("Este mensaje aparece inmediatamente");

//setTimeout - nos permite ejecutar una funcion dado x tiempo
// el primer parametro del setTimeout es la intruccion que quiero ejecutar (una funciona)
// el segundo parametro es el tiempo, el tiempo que quiero que se ejecute, (temporizador)
// si pongo 3 segundos la intruccion se ejecutara alos 3 segundos


// funcion normal se le asigna a una variable y se puede usar en cualquier punto despues de su declaracion
const intruccionA = () => {

}

// funcion anonima, se caracteriza por no estar asignada a una variable
// desventaje que no la puedo usar en otra parte del codigo
(() => {
    console.log("funcion anonima");
})();

// settimeout trabaja con milisegundos
setTimeout(() => {
    console.log("Me ejecute alos 10 segundos");  
},10000)

console.log("Me ejecute antes del timeout el flujo normal del programa");

//usando una funcion normal

const intruccionB = (nombre, accion,edad) => {
    console.log("Mi nombre es: ", nombre, " la accion que hice fue: ", accion," mi edad es: ", edad);
}

//funcion setTimeout
// ... significa que puedo pasar cualquier cantidad de argumentos o parametros
setTimeout(intruccionB,5000,"Ana","Correr",13);

// flujo normal => ejecucion a => ejecucion b => ejecucion c
// flujo asyncrono => declaro a(y lo voy a ejecutar alos 10) => ejecucion b => ejecucion a(se ejecuta alos 10)






