// Desectructuración
// Asignación Desestructurante
const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman'
}

const { nombre, edad, clave } = persona;

const getPerson = ( { clave, nombre, edad, rango = 'Cap' } ) => {
	return {
		nombreClave: clave,
		anios: edad,
		latlng: {
			lat: 14.1212,
			lng: -12.2323
		}
	}
}

const { nombreClave, anios, latlng: { lat, lng } } = getPerson(persona);
console.log( nombreClave, anios )
console.log( lat, lng )
