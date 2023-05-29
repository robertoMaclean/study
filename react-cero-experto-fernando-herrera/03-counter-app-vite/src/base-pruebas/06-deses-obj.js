

export const userContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombre: nombre,
        clave: clave,
        edad: edad,
        rango: rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}


