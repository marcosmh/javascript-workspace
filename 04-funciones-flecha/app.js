
// Funciones Flecha

var miFuncion2 = function(valor) {
    return valor;
}

let miFuncion1 = valor => valor;

console.log( miFuncion1('Hola'));
console.log( miFuncion2('Mundo'));

var sumar2 = function(num1, num2) {
    return num1 + num2;
};

let sumar1 = (num1, num2) => num1 +  num2;

console.log( sumar1(10,20) );
console.log( miFuncion2(2,6) );

var saludar2 = function() {
    return 'Hola Mundo 2';
}

let saludar1 = () => 'Hola Mundo 1';

console.log( saludar1() );

var saludarPersona2 = function( nombre ) {
    var salida = 'Hola, ' + nombre;
    return salida;
}

let saludarPersona1 = nombre => {
    let salida = `Hola, ${ nombre }`;
    return salida;
}

console.log( saludarPersona1('markcode') );
console.log( saludarPersona2('vader') );


var obtener_libro = function(id) {
    return {
        id: id,
        nombre: 'Metal Sweedish'
    }
}

let obtenerLibro = id => ({
    id: id,
    nombre: 'Lord of Chaos'
});

console.log( obtenerLibro(10) );
console.log( obtener_libro(1) );


//Funciones anonimas

var saludo1 = function(nombre ) {
    return 'Hola, ' + nombre; 
}('Markcode');

let saludo2 = ( nombre => `Hola, ${nombre }`)('Batman');

console.log( saludo1 );
console.log( saludo2 );


// Objeto this

var manejador = {
    id: '123',

    init: function() {

        document.addEventListener('click', 
            event => this.clickEnPagina( event.type ) ); 
        
        //document.addEventListener('click', (function(event) {
        //    this.clickEnPagina( event.type );
            //console.log( this );
        // }).bind(this),false);

    }, // fin del init
    clickEnPagina: function(type) {
        console.log( "Manejando " + type + " para el id: " + this.id );
    }

}

manejador.init();


// Funciones flechas y arreglos

var arreglo = [5,10,11,2,1,9,20];

var ordenado = arreglo.sort( function(a, b)  {
    return a - b;
});

let ordenadoES6 = ordenado.sort( (a,b) => a -b );


console.log( ordenado );
console.log( ordenadoES6 );

// Identificando funciones de flecha y otros ejemplos

var restar = (a, b) => a - b;

console.log( typeof restar );
console.log( restar instanceof Function );

//var restar2 = new restar(1,2);

function ejemplo(x,y) {
    ( (a, b) => {
        console.log( arguments[0] );
    })();
}

ejemplo(1,2);