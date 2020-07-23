/* DESESTRUCTURACION - ASIGNACION DESESTRUCTURANTE */
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment */

const persona = {
    nombre: 'Tony',
    edad: 44,
    clave: 'Ironman',
    rango: 'Soldado'
};

// const {nombre, edad, clave} = persona;
 
// console.log(nombre);

/* PODEMOS APLICAR LA DESESTRCUTURACION DIRECTAMENTE EN LO QUE LE PASAMOS A LA FUNCION */
/* TAMBIEN LE PODEMOS ASIGNAR VALORES POR DEFECTO -> RANGO */
/* PERO SI EL VALOR ESTA EN EL OBJETO, EL VA A PONER EL VALOR QUE HAYA EN EL OBJETO EN EL CASO DE RANGO */
const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.32323,
            lng: -12.324234
        }
    }
}

/* DESESTRCUTURAMOS EL OBJETO QUE NOS RETORNA LA FUNCION USECONTEXT */
/* PARA DESESTRUCTURAR EL OBJETO LATLNG QUE ESTA DENTRO DEL OTRO OBJETO QUE RETORNA LA FUNCION */
const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
