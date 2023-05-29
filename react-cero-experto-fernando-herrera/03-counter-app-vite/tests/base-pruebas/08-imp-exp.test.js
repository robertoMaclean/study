import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {

    const id = 1
    const hero = getHeroeById( id )

    expect( hero ).toEqual({ id:1, name: 'Batman', owner: 'DC' })
  })
  test('getHeroeById debe retornar undefined si no existe', () => {

    const id = 100
    const hero = getHeroeById( id )

    expect( hero ).toBeFalsy()
  })

  // Tarea:
  // Debe de retornar un arreglo con los héroes de DC
  // Lenght === 3
  // toEqual al arreglo filtrado
  test('getHeroesByOwner debe retornar heroes de DC', () => {

    const owner = 'DC'
    const dcHeroes = getHeroesByOwner( owner )

    expect( dcHeroes.length ).toBe( 3 )

    const expectedHeroes = [
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
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
      }
    ]

    expect( dcHeroes ).toEqual( expectedHeroes )
    expect( dcHeroes ).toEqual( dcHeroes.filter( heroe => heroe.owner === owner ) )
  })
  
  // debe de retornar un arreglo con los héroes de Marvel
  // length === 2
  test('getHeroesByOwner debe retornar un arreglo de tamaño 2', () => {

    const owner = 'Marvel'
    const marvelHeroes = getHeroesByOwner( owner )

    expect( marvelHeroes.length ).toBe( 2 )
    expect( marvelHeroes ).toEqual( marvelHeroes.filter( heroe => heroe.owner === owner ) )
  })

})
