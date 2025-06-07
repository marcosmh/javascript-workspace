
// startsWith & endsWith

var mensaje = "Hola mundo";

console.log( mensaje.substring(0,1) == 'H' );

console.log( mensaje.startsWith('Hola') );
console.log( mensaje.endsWith('mundo') );
console.log( mensaje.startsWith('mu',5) );

console.log( mensaje.indexOf('o') );
console.log( mensaje.includes('o') );
console.log( mensaje.includes('a') );
console.log( mensaje.includes('m',5) );

// Repeat

let texto = 'Hola';

console.log( texto.repeat(4) );

const ESPACIOS = 12;

let nombres = ['markcode', 'thekid','theeagles'];
let telefonos = ['996699', '778866','223344'];

for( i in nombres ) {
    let dif = ESPACIOS - nombres[i].length;

    console.log( nombres[i] + " ".repeat(dif) + "|" + telefonos[i] );
}

// Literal Templates

function getNombre() {
    return "Darth Vader";
}

let nombre = 'Markcode';
let apellido = 'Developer';

let nombreCompleto = nombre+' '+apellido;
console.log(nombreCompleto) 

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto2); 

let nombreCompleto3 = `El nombre completo es ${getNombre()} `;
console.log(nombreCompleto3); 

let suma = `${2 + 4} `;
console.log( suma );

let multiLinea = `<h1 class'algo'>${ nombre }</h1>
<p>Hola ${apellido }</p>
I'm Darth Vader`;
console.log( multiLinea );

// Template tags
function etiqueta(literales, ...substitucion) {

    console.log( arguments );
    console.log( literales );
    console.log( substitucion );

    let resultado = "";

    for(let i = 0; i < substitucion.length; i++ ) {
        resultado += literales[i];
        resultado += substitucion[i];
    }

    return resultado;
}

let unidades = 5,
    costo_unitario = 10;

let msj = etiqueta `${ unidades } lapices cuestan ${ unidades * costo_unitario } pesos.`;
console.log( msj );

// Raw

let msg = `Hola \n mundo\\`;
let msg2 = String.raw`Hola \n mundo\\`;

console.log( msg );
console.log( msg2 );
