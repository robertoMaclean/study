import { FirstApp } from "../src/FirstApp"
import { render } from '@testing-library/react'

describe('Pruebas en <FirstApp />', () => {

	test('debe de hacer match con el snapshot', () => {
		render( <FirstApp /> )	
	})

})
