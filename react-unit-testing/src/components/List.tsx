import { useState } from "react"

type ListProps = {
    initialItems: string[]
}

function List(props: ListProps) {
  const {initialItems} = props   

  const [newItem, setNewItem] = useState('')
  const [list, setList] = useState(initialItems)

  // Simular chamada api passou um setTimeout
  function addToList(){
    setTimeout(() => {
      setList(state => [...state, 'Novo'])

    }, 500)
  }

  function removeFromList(item: string){
    setTimeout(() => {
      setList(state => state.filter(item => item !== item))

    }, 500)
  }

  return (
    <>
      <input value={newItem} placeholder="Novo item" onChange={e => setNewItem(e.target.value)}/>
      <button onClick={addToList}>Adicionar</button>
      
      <ul>
        {list.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>))}
      </ul>
    </>
  )
}

export default List
