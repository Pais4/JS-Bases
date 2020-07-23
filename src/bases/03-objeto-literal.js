/* OBJETOS LITERALES */
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    /* OBJETOS DENTRO DE OBJETOS */
    direccion: {
        ciudad: 'New York',
        zip: 55433,
        lat: 14.3324,
        lng: 67.3232
    }
}

/* CON HACER ESTO BASICAMENTE ESTAMOS CREANDO UN NUEVO OBJETO QUE TIENE UNA PROPIEDAD 
LLAMADA PERSONA */
console.log({ persona }) // Es lo mismo que console.log({ persona: persona }); ES6

/* CONSOLE TABLE LO MOSTRARA EN TABLA */
console.table(persona);

/** SI QUEREMOS COPIAR EL OBJETO **/

/* SI LO HACEMOS DE ESTA MANERA ESTARIAMOS COPIANDO LA REFERENCIA DEL OBJETO */
// const persona2 = persona;

/* ASI ES COMO HACEMOS UNA COPIA DE UN OBJETO CON EL OPERADOR SPREAD */
const persona2 = { ...persona };

console.log(persona2);