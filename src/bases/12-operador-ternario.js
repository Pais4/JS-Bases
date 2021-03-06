/* OPERADOR CONDICIONAL TERNARIO */

/* DE MANERA TRADICIONAL */
const activo = true;

// let mensaje = '';

// if(activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

/* CON EL OPERADOR CONDICIONAL TERNARIO */
/* PARENTESIS SEGUIDO DE LA CONDICION, LUEGO UN SIGNO DE INTERROGACION Y LA 
CONDICION CUANDO ESTO SE CUMPLE, LUEGO CASO CONTRARIO : DONDE NO */
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

/* TAMBIEN SE PUEDE PONER LA CONDICION MAS EXPLICITAMENTE */
// const mensaje = ( activo === true ) ? 'Activo' : 'Inactivo';

/* UN OPERADOR TERNARIO SIEMPRE ESPERA AMBAS PARTES, (IF, ELSE)
SI QUEREMOS QUE SOLO SE CUMPLA LA CONDICION IF HACEMOS LO SIGUIENTE */
/* OPERADOR && SEGUIDO DE LO QUE QUIERO QUE SE EJECUTE SI LA PARTE IZQUIERDA
ES TRUE*/
/* COMO ACTIVO ES TRUE, ENTONCES SE EJECUTA EL 'ACTIVO' */
const mensajeActivo = activo && 'Activo'

/* PERO SI NEGAMOS ESTO, ENTONCES VAMOS A TENER UN FALSE DIRECTAMENTE */
const mensajeNoActivo = !activo && 'Activo'

/* ESTO ES MUY UTIL SI NECESITAMOS MOSTRAR ALGO EN CASO DE QUE UNA CONDICION
SE CUMPLA Y EN CASO CONTRARIO NO HACER NADA */

console.log(mensaje)
console.log(mensajeActivo)
console.log(mensajeNoActivo)