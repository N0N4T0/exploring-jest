import {render} from '@testing-library/react'
import App from './App'
// render permite importar o componente 

test('component App', ()=> {
    const {getByText} = render(<App/>)

    expect(getByText(/hello world/i)).toHaveAttribute('class', 'test')
})