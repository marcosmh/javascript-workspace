// Parametros por defecto

function saludo(mensaje='Hola Markcode', tiempo = 6) {

    //mensaje = mensaje || 'Hola Mundo';
    //mensaje = ( typeof mensaje !== 'undefined' ) ? mensaje : 'Hola Mundo';

    setTimeout( function(){
        console.log(mensaje);
    },tiempo)

}

//saludo('Markcode',4);

function hola() {
    console.log( "Hola Darth Vader." );
}

function saludar( fn = hola, 
                  persona = { nombre: 'Anakin', apellido: 'Skywalker' } ) {

    console.log( typeof fn );

    if( typeof fn === 'undefined') {
        console.error('No es una funcion');
        return;
    }    

    fn();

    console.log( persona );
}

persona = {
    nombre: 'Varg',
    apellido: 'Ulv'
}


saludar( hola, persona  );

// Valores por defecto afectar a arguments

function sumar( a, b) {
    console.log( arguments );
}

sumar( 1, 2);

// Parametros REST

function agregar_alumnos() {
    console.log( arguments );

    for( var i = 1; i < arguments.length; i++ ) {
        arguments[0].push( arguments[i] );
    }

    return arguments[0];
}

function agregar_alumnosx(arr_alumnos, ...alumnos) {
    console.log( arguments );

    for( let i = 1; i < alumnos.length; i++ ) {
        arr_alumnos.push( alumnos[i] );
    }

    return arr_alumnos;
}

let alumnos_arr = ['Markcode'];
let alumnos_arr2 = agregar_alumnosx( alumnos_arr,'Anakin','Luke','Leia','Chewee' );

console.log( alumnos_arr2 );

// Restriccion de parametros REST

function juntar_nombres( nombre, ...apellidos) {
    
}


// Operador: Spred

var numeros = [1,5,10,20,100,234];
var num1 = 10;
var num2 = 30;
var max = Math.max(num1, num2);
var maximo = Math.max.apply(Math, numeros);

console.log( max );
console.log( maximo );

let nums = [1,5,10,20,100,234];
let maxi = Math.max( ...nums );
console.log( maxi );

// Romper la relacion de referencia de los objetos

let persona1 = {
    nombre: 'Marcode',
    edad: 33
}

let persona2 = { persona1 };
persona2.nombre = 'Vader';

console.log( persona1 );
console.log( persona2 );

// Añadir personas

let person1 = {
    nombre: 'Luke',
    edad: 23
}

let person2 = {
    nombre: 'Anakin',
    edad: 40,
    direccion: 'Tattoine',
    conduce: true,
    vehiculo: true,
    vegetariano: false,
    casado: true
}

person1 = {
    ...person2,
    ...person1
}

console.log( person1 );
console.log( person2 );

//person1.direccion = person2.direccion;
//person2.direccion = 'Coruscant';


// Diferencias de spred y rest

function saludarRest(saludo, ...nombres) {
    for( i in nombres ) {
        console.log(`${saludo} ${nombres[i]}`);
    }

}

function saludarSpread(saludo, ...nombres) {
    console.log(`${saludo} ${nombres}`);
}

saludarRest('Hola','Luke','Leia','Anakin');

let persons = ['Han','Chewee','Landon'];

saludarSpread('Que tal! ', persons);

let partes = ['brazos','piernas'];
let cuerpo = ['cabeza','cuello',...partes,'pies','manos'];

console.log(cuerpo);

// Comportamiento de las funciones

function Person(nombre) {

    //if( this instanceof Person ) {
    if( typeof new.target !== 'undefined' ) {
        this.nombre = nombre;
    } else {
        throw new Error('Esta funcion , debe ser utilizada con el new');
    }
    
}

var pers0n = new Person("Vader");

var noEsPersona = Person.call(pers0n,"Vader2");

