

//let mensaje = 'Hola mundo';
//console.log( mensaje );

/*
let mensaje = '123';
if( 1 === 1) {
    mensaje = 'Hola Mundo';
}

console.log( mensaje );
*/


/*
let mensaje = 'Hola';

if( true ) {
    let mensaje = 'Que tal';
    console.log( mensaje );
}

console.log( mensaje );
*/

/*
const IMPUESTO_SV = 14.4;

if( true ){
    const IMPUESTO_SV = 19.4;
    console.log( IMPUESTO_SV );
}

console.log( IMPUESTO_SV );

const PERSONA = {
    nombre: 'markcode',
    apellido: 'rock'
}

PERSONA.nombre = 'Vader';

console.log( PERSONA );

for(let i = 0; i <=10; i++ ) {
    console.log( i );
} 
*/

var funciones = [];

for(let i = 0; i <10; i++ ) {
    funciones.push( function() { console.log(i) } )

    /*
    funciones.push( 
        (function(valor){
            console.log(valor)
        })(i)
     );*/
}

funciones.forEach( function(func) {
    func();
});
