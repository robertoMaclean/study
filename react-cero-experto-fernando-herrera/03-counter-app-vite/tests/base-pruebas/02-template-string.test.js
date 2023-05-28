import {getSaludo} from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {
  test('getSaludo must be return "Hola Rob"', () => {
    const name = 'Rob'
    const message = getSaludo( name )

    expect( message ).toBe( `Hola ${ name }` )
  })
}) 
