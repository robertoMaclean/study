import { FirstApp } from "../src/FirstApp"
import { render } from '@testing-library/react'

describe('Pruebas en <FirstApp />', () => {

	test('debe de hacer match con el snapshot', () => {
		const title = 'Hola, Soy Goku'
		const { container } = render( <FirstApp title = { title } /> )	

		expect( container ).toMatchSnapshot()
	})

	test('debe mostrar el título en h1', () => {
		const title = 'Hola, Soy Goku'
		const { container, getByText } = render( <FirstApp title= { title } />) 
		expect( getByText( title ) ).toBeTruthy()

		const h1 = container.querySelector('h1')
		expect( h1.innerHTML ).toBe( title )
	})

})
