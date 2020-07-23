/* PROMESAS */
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise */
import {getHeroeById} from './bases/08-importaciones-exportaciones';

/* LAS PROMESAS SE CREAN CON UN CALLBACK QUE RECIBE DOS ARGUMENTOS 
(RESOLVE, REJECT) */
/* LAS PROMESAS POR NATURALEZA SON ASINCRONAS, PRIMERO SE VA A EJECUTAR 
TODO EL CODIGO SINCRONO, CAEN EN UN LUGAR ESPECIAL DE LA PILA DE TAREAS DE JS
Y HASTA QUE SE TERMINA LO SINCRONO EJECUTA LOS RESULTADOS DE LAS PROMESAS */
/* RESOLVE Y REJECT SON OTROS CALLBACK */

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         /* TRAEMOS LOS DATOS */
//         const heroe = getHeroeById(2);

//         /* TENEMOS QUE LLAMAR EL RESOLVE O EL REJECT PARA QUE NOTIFIQUE EL 
//         THEN Y YA EL THEN SE EJECUTARA */
//         /* EL RESOLVE LE VA A TRANSFERIR EL VALOR DE LOS ARGUMENTOS (HEROE)
//         A EL THEN */
//         resolve(heroe);

//         // reject('No se pudo encontrar el heroe');

//     }, 2000);

// })

// /* THEN -> LA PROMESA SE HIZO CORRECTAMENTE */
// /* COGEMOS EL VALOR QUE NOS TRASNFIRIO EL RESOLVE */
// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// /* CATCH -> HUBO UN ERROR Y MANEJAMOS AL EXCEPCION */
// /* AQUI RECIBIMOS EL ERROR -> ERR */
// .catch(err => console.log(err));
// /* FINALLY -> SE EJECUTA DESPUES DEL THEN O DEL CATCH */

/* PASANDOLE LE ID COMO PARAMETRO A UNA FUNCION */
const getHeroeByIdAsync = ( id ) => {

    /* AQUI TENDRIAMOS QUE PONER UN RETURN DE LA PROMESA PARA QUE LA FUNCION
    NO REGRESE UN VOID */
    return new Promise((resolve, reject) => {

        setTimeout(() => {
    
            /* TRAEMOS LOS DATOS */
            const heroe = getHeroeById(id);
    
            /* TENEMOS QUE LLAMAR EL RESOLVE O EL REJECT PARA QUE NOTIFIQUE EL 
            THEN Y YA EL THEN SE EJECUTARA */
            /* EL RESOLVE LE VA A TRANSFERIR EL VALOR DE LOS ARGUMENTOS (HEROE)
            A EL THEN */
            if(!heroe){
                reject('No se pudo encontrar el heroe');
            } else {
                resolve(heroe);
            }
        }, 2000);
    
    })
}

getHeroeByIdAsync(10)
    /* TAMBIEN SE PUEDE TESTEAR DE ESTA MANERA, EL CONSOLE.LOG RECIBE EL 
    PARAMETRO EN LA FUNCION Y LO IMPRIME IGUALMENTE SIN TENER QUE PONER TODO */
    // .then(console.log)
    .then( heroe => console.log('Heroe: ', heroe))
    .catch(err => console.log(err));
