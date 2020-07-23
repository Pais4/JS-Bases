/* VARIABLES Y CONSTANTES */
const nombre = 'Mateo';
const apellido = 'Serna';

let valor = 5;

/* EL SCOPE DE LAS VARIABLES EN ESTE CASO ES LOCAL, LOS VALORES SON DIFERENTES */
if (true){
    let valor = 10;
    const nombre = 'Vane';
    
    console.log(valor, nombre);
}

console.log(nombre, apellido, valor);
