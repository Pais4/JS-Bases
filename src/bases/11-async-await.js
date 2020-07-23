/* ASYNC - AWAIT */

/* PODEMOS TRASNFORMAR UNA FUNCION A QUE RETORNE UNA PROMESA */
/* EL AWAIT NOS AYUDA A QUE PODAMOS TRABAJAR TODO EL CODIGO COMO SI 
FUERA SINCRONO */

const getImage = async() => {

    /* PARA PODER HACER EL MANEJO DE ERRORES CON EL ASYNC Y EL AWAIT
    ES NECESARIO UTILIZAR EL TRY - CATCH */
    try {

        const apiKey = '8tVOSoRPmuNXYTF8YXO8mGQTEU1ocPFj';
        /* EL AWAIT LE DICE QUE ESPERE A QUE ESA PROMESA TERMINE ANTES DE EJECUTAR
        LA SIGUIENTE LINEA DE CODIGO */
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        /* UNA VEZ TERMINE, PODRIAMOS PENSAR QUE EL CODIGO ES SINCRONO */
        /* COMO RESP.JSON TAMBIEN DEVUELVE UNA PROMESA, DEBEMOS ESPERAR A QUE SE
        RESUELVA LA DATA */
        const {data} = await resp.json();

        /* AHORA MOSTRAMOS LA IMAGEN QUE PROVIENE DE LA DATA */
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        
        /* MANEJO DEL ERROR*/
        console.error(error)

    }

    
}

getImage();

