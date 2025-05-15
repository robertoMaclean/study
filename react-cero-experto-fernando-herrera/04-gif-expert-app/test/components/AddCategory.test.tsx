import { AddCategory } from '../../src/components/AddCategory'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Pruebas en <AddCategory />', (): void => {
  test('debe cambiar el valor en la caja de texto', () => {
    render(<AddCategory onNewCategory={() => { }} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'Saitama' } })
    expect(input.value).toBe('Saitama')
    screen.debug()
  })
})
