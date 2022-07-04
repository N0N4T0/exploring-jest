import {render, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
// render permite importar o componente 
import List from './List'

import userEvent from '@testing-library/user-event'

describe('List Component', ()=>{
    it('should render list items', ()=> {
        const {getByText} = render(<List initialItems={['Diego', 'Lucas', 'Maria']}/>)

        expect(getByText(/Diego/i)).toBeInTheDocument()
        expect(getByText(/Lucas/i)).toBeInTheDocument()
        expect(getByText(/Maria/i)).toBeInTheDocument()
    })

    it('should be able to add new item to the list', async ()=> {
        const {getByText, getByPlaceholderText, debug} = render(<List initialItems={[]}/>)

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

    it('should be able to remove item from the list', async ()=> {
        const {getByText, getAllByText} = render(<List initialItems={['Diego']}/>)

        const UserEvent = userEvent.setup()

        const removeButtons = getAllByText('Remover')

        await UserEvent.click(removeButtons[0])

        await waitForElementToBeRemoved(() => {
            return getByText('Diego')
        })
    })

    it('seconde test remove, should be able to remove item from the list', async ()=> {
        const {queryByText, getAllByText} = render(<List initialItems={['Diego']}/>)

        const UserEvent = userEvent.setup()

        const removeButtons = getAllByText('Remover')

        await UserEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Diego')).not.toBeInTheDocument()
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