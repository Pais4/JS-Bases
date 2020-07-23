/* TEMPLATE STRINGS */

const nombre = 'Mateo';
const apellido = 'Serna';

const nombreCompleto = `${nombre} ${apellido} ${1+1}`;

console.log(nombreCompleto);

function getSaludo(){
    return 'Hola mundo';
}

const saludo = (nombre) => {
    return `El nombre es ${nombre}`;
}

console.log(saludo(nombre));
console.log(`Esto es un texto: ${getSaludo()}`);