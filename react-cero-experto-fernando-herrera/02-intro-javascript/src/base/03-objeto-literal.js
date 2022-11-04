const persona = {
	nombre: 'Chamaco',
	apellido: 'Junior',
	edad: 45,
	direccion: {
		ciudad: 'New York',
		zip: 55321321,
		lat: 14.3232,
		lng: 34.9233321
	}
};

console.log( persona );

const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log( persona2 );
console.log( persona );
