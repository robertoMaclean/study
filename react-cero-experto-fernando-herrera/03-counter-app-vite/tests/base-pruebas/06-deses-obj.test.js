import {userContext} from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      nombre: 'ABC123',
      clave: 'El_Papi1502',
      edad: 10,
      rango: 'Teniente',
       latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
    const user = userContext( testUser )
    expect( testUser ).toStrictEqual( user )
  })
})
