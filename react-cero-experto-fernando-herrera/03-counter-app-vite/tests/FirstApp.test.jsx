import { FirstApp } from '../src/FirstApp'
import { render } from '@testing-library/react'

describe('Pruebas en <FirstApp />', () => {

	test('debe de hacer match con el snapshot', () => {
		const title = 'Hola, Soy Goku'
		const { container } = render( <FirstApp title = { title } /> )	

		expect( container ).toMatchSnapshot()
	})

	test('debe mostrar el título en h1', () => {
		const title = 'Hola, Soy Goku'
		const { container, getByText, getByTestId } = render( <FirstApp title= { title } />) 

		expect( getByText( title ) ).toBeTruthy()
		//const h1 = container.querySelector('h1')
		//expect( h1.innerHTML ).toBe( title )
		expect( getByTestId('test-title').innerHTML ).toContain( title )

	})

	test('debe de mostrar el subtítulo enviado por props', () => {
		const title = 'Hola, Soy Goku'
		const subTitle = 'Soy un subtitulo'

		const { getAllByText } = render( 
			<FirstApp 
				title= { title }
				subTitle = { subTitle }
			/>) 

		expect( getAllByText( subTitle ).length ).toBe( 2 )

	})

	

})
