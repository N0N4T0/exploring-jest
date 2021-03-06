import {render, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
// render permite importar o componente 
import List from './List'

import userEvent from '@testing-library/user-event'

describe('List Component', ()=>{
    it('should render list items', async ()=> {
        const {getByText, queryByText, rerender} = render(<List initialItems={['Diego', 'Lucas', 'Maria']}/>)  

        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Lucas')).toBeInTheDocument()
        expect(getByText('Maria')).toBeInTheDocument()

        rerender(<List initialItems={['Julia']}/>)

        await waitFor(() => {
            // expect(getByText('Julia')).toBeInTheDocument()
            expect(queryByText('Mayk')).not.toBeInTheDocument()
        })
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

    it('second test remove, should be able to remove item from the list', async ()=> {
        const {queryByText, getAllByText} = render(<List initialItems={['Diego']}/>)

        const UserEvent = userEvent.setup()

        const removeButtons = getAllByText('Remover')

        await UserEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Diego')).not.toBeInTheDocument()
        })
    })
})

// geralmente quando vamos criar v??rios testes para uma unidade, come??amos com describe

// pode ser test ou it, quest??o de sem??tica s??

//Os que come??am com query n??o falham caso eu n??o encontre o elemento
// Get caso n??o encontre o elemento ele falha
// Find, quase a mesma coisa que o get por??m, espera o elemento aparecer em tela


// A vantagem de n??o quebrar o teste ?? que as vezes voc?? quer testar que o elemento
// n??o est?? l??. Exemplo usaria o query

// waitFor = fica rodando um loop esperando at?? que o valor seja v??lido, e pode
//  ser passado um intervalo para saber de quanto em quanto minha codi????o pode ser satisfeita

// o get quando tem mais de uma elemetno que satosfaz a condi????o ele falha tamb??m.

// rerender = ree rendereiza o componente novamente permite passar a propriedade que eu informei para ele
// deixando assim din??mico