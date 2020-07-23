/* DESESTRUCTURACION DE ARREGLOS */

const personajes = ['Goku', 'Vegeta', 'Trunks'];

/* NORMALMENTE SE ACCEDE A LA POSICION DE ESTE MANERA */
console.log(personajes[0]);

/* PERO HACIENDO DESESTRUCTURACION DEL ARREGLO */
/* LA COMA ES PARA DECIRLE QUE EL PRIMER ELEMENTO NO ME SIRVE, QUE LO IGNORE Y VAYA AL SEGUNDO */
/* ASI MISMO PODRIAMOS HACER PARA LA TERCERA POSICION */
const [ , p2 ] = personajes;
console.log(p2); 

const retornaArreglo = () => {
    return ['ABC', 123];
}

/* VAMOS A DESESTRUCTURAR LO QUE NOS RETORNA LA FUNCION */
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

/* EJERCICIO */
const useState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombre, setNombre] = useState('Teo');

console.log(nombre)
setNombre();

/* TAMBIEN PODRIAMOS LLAMAR LA FUNCION QUE ESTA DENTRO DEL ARRAY DE LA SIGUIENTE MANERA */
// useState[1]();