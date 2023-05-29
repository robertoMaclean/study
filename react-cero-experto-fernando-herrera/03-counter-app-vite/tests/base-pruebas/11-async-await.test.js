import {getImagen} from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => {
  test('getImagen debe de retornar un error si no tenemos la API KEY', async() => {
      
    const url = await getImagen()
    expect( url ).toBe( 'No se encontró la imagen' )
  })
})
