const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 )

const retornaArreglo = () => {
	return [ 'ABC', 123 ]
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros)

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. el segundo se llamará setNombre
const usesState = ( nombre ) => {
	return [ nombre, () => { console.log('Hola Mundo') } ];
}

const arr = usesState( 'Goku' );
const[ nombre, setNombre ] = arr;
console.log(nombre);
setNombre();
