/* FUNCIONES */

/* ESTA FUNCION YA NO SE RECOMIENDA MUCHO, POR QUE PODRIA CHOCAR CON UNA VARIABLE */
// function saludar(nombre){
//     return `Hola ${nombre}`;
// }
/* COMO EN ESTE CASO */
//saludar = 20;

/* LO MEJOR ES ASIGNAR LA FUNCION A UNA CONSTANTE */
const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

/* FUNCION DE FLECHA */
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

/* SI SOLO TENEMOS UNA UNICA LINEA, LO PODEMOS SIMPLIFICAR */
const saludar3 = (nombre) => `Hola ${nombre}`;

/* LOS PARENTESIS () SIGNIFICAN QUE ESTOY REGRESANDO EL OBJETO DE MANERA IMPLICITA */
/* EL RETURN DE ESTA FUNCION ES UN OBJETO -> EL MISMO RESULTADO SIN LA PALABRA RETURN */
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papichulo'
})

const user = getUser();
console.log(user);

/* OTRO EJEMPLO DE FUNCION FLECHA CON OBJETO IMPLICITO */
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC1230',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('teoslopera');
console.log(usuarioActivo);
