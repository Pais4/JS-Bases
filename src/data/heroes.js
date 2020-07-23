/* EN ESTE CASO PODRIAMOS HACER UNA EXPORTACION POR DEFECTO, YA SOLO CONSTA DE UN ARRAY */
// export default [

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

/* OCUPAMOS OTRA EXPORTACION PERO INDIVIDUAL */
// export const owners = ['DC', 'Marvel'];

const owners = ['DC', 'Marvel'];

/* PERO ES MEJOR EXPORTARLO DE ESTA MANERA, SE VE EL CODIGO MAS LIMPIO SI SOLO ES UNA EXPORTACION */
// export default heroes;

/* OTRA FORMA DE EXPORTAR VARIOS ELEMENTOS ES LA SIGUIENTE - COMO OBJETO*/
/* PODEMOS ESPECIFICAR CUAL SERIA EL POR DEFECTO */
export {
    heroes,
    //heroes as default,
    owners
}