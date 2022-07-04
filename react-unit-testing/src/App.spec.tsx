import {render, waitFor} from '@testing-library/react'
// render permite importar o componente 
import App from './App'

import userEvent from '@testing-library/user-event'

describe('App Component', ()=>{
    it('should render list items', ()=> {
        const {getByText} = render(<App/>)

        expect(getByText(/Diego/i)).toBeInTheDocument()
        expect(getByText(/Lucas/i)).toBeInTheDocument()
        expect(getByText(/Maria/i)).toBeInTheDocument()
    })

    it('should be able to add new item to the list', async ()=> {
        const {getByText, getByPlaceholderText, debug} = render(<App/>)

        const user = userEvent.setup()

        // debug()
        const inputElement = getByPlaceholderText('Novo item')
        const addButton = getByText('Adicionar')

        // debug()
        
        await user.type(inputElement, 'Novo')
        await user.click(addButton)

        await waitFor(() => {
            expect(getByText('Novo')).toBeInTheDocument()
        })

    })
})

// geralmente quando vamos criar vários testes para uma unidade, começamos com describe

// pode ser test ou it, questão de semâtica só

//Os que começam com query não falham caso eu não encontre o elemento
// Get caso não encontre o elemento ele falha
// Find, quase a mesma coisa que o get porém, espera o elemento aparecer em tela


// A vantagem de não quebrar o teste é que as vezes você quer testar que o elemento
// não está lá. Exemplo usaria o query

// waitFor = fica rodando um loop esperando até que o valor seja válido, e pode
//  ser passado um intervalo para saber de quanto em quanto minha codição pode ser satisfeita