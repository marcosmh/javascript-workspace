
// Adiciones de los Objetos

function crearPersona(nombre, apellido, edad ) {
    return {
        nombre,
        apellido,
        edad
    }
}

var vader = crearPersona('Anakin','Skywalker',30);

console.log(vader);

// Metodo concisos

var persona = {
    nombre: 'Markcode',

    getNombre() {
        console.log( this.nombre );
    }

}

persona.getNombre();

// Propiedades computadas o procesadas

var person = { }

var primer_nombre = '';
var apellido = 'apellido';
person[primer_nombre] = 'Markcode';
person[apellido] = 'Skywalker';

console.log( person["primer nombre"] );
console.log( person[apellido] );

var person2 = {
    "primer nombre": "Vader"
}

console.log( person2["primer nombre"] );


let apellido_es6 = "primer apellido";

let personaES6 = {
    "primer nombre": "Anakyn",
    [ apellido_es6 ]: 'Skywalker'
}

console.log( personaES6["primer nombre"] );
console.log( personaES6[apellido_es6] );

let sufijo = ' nombre';

let Es6Persona = {
    [ 'primer' +  sufijo]: 'Luke',
    [ 'segundo' +  sufijo]: 'Ashoka',
}

console.log( Es6Persona["primer nombre"] );
console.log( Es6Persona["segundo" + sufijo] );

// Nuevo metodo Object.is()

console.log( +0 == -0 );
console.log( +0 === -0 );
console.log( Object.is(+0, -0) );

console.log(" ==== ");

console.log( NaN == NaN );
console.log( NaN === NaN );
console.log( Object.is(NaN, NaN) );

console.log(" ==== ");

console.log( 5 == 5 );
console.log( 5 == "5" );

console.log( 5 === 5 );
console.log( 5 === "5" );
console.log( Object.is(5, 5) );
console.log( Object.is(5, "5") );

// Metodo object.assign()

function mezclar(objReceptor, objDonador) {
    Object.keys( objDonador ).forEach( function( key ) {
        objReceptor[key] = objDonador[key];
    });
    return objReceptor;
}

var objReceptor = {};
var objDonador = {
    //nombre: 'mi-archivo.js'

    get nombre() {
        return 'mi-archivo.js';
    }
}

console.log( mezclar(objReceptor, objDonador) );
console.log( objDonador );

console.log( Object.assign(objReceptor, objDonador) );


//

var objeto = {
    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1
};

objeto.d = 1;
objeto["2"] = 1;
objeto["a"] = 1;


console.log( Object.getOwnPropertyNames( objeto ).join(",")  );

console.log( Object.keys( objeto ) );

console.log( JSON.stringify( objeto ) );

for( i in Object.keys( objeto )  ) {
    console.log( Object.keys( objeto )[i]  );
}