const apiKey = '8tVOSoRPmuNXYTF8YXO8mGQTEU1ocPFj';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/* HACEMOS UN RETURN IMPLICITO DE LA RESPUESTA.JSON PARA EVITAR HACER EL CODIGO
DE ABAJO Y TENER UN CODIGO MAS LIMPIO */
peticion
    /* EL RESULTADO DE ESTE THEN PASA A LA SIGUIENTE PROMESA */
    .then( resp => resp.json() )
    /* COMO LO QUE ACABAMOS DE HACER ARRIBA RETORNA OTRA PROMESA ENTONCES
    PODEMOS HACER OTRO THEN */
    /* USAMOS LA DESESTRUCTURACION PARA EXTRAER LA DATA */
    .then( ({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
    })
    /* NO ES NECESARIO HACER MULTIPLES CATCH YA QUE ESTE ATRAPA TODOS */
    .catch( err => console.log(err));

/* OTRA FORMA DE HACERLO */
/* PARSEAMOS LA DATA A FORMATO JSON Y ESTO NOS DEVUELVE OTRA PROMESA */
    /* PERO DE ESTA FORMA SE VE DIFICIL DE MANTENER EL CODIGO */
    // resp.json().then( data => {
    //     console.log(data);
    // })