
// Funciones en JS
const saludar = function saludar( nombre ) {
	return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
	return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

console.log( saludar('Goku') )
console.log( saludar2('Vegeta') )
console.log( saludar3('Goku') )
console.log( saludar4() )

const getUser = () => ({
	uid: 'ABC123',
	username: 'El Papi1502'
}) 

console.log( getUser() )

// Tarea
// 1. Transformar a función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
function getUsuarioActivo( nombre ) {
	return {
		uid: 'ABC567',
		username: nombre
	}
}

// Resolución
const getUsuarioActivo2 = ( nombre ) => ({
	uid: 'ABC567',
	username: nombre
})


const usuarioActivo = getUsuarioActivo( 'Roberto' );
console.log( usuarioActivo )

const usuarioActivo2 = getUsuarioActivo2( 'RobReznor' )
console.log( usuarioActivo2 )
