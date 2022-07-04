import { useState } from "react"

function App() {
  const [newItem, setNewItem] = useState('')
  const [list, setList] = useState(['Diego', 'Lucas', 'Maria'])

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
            <button onClick={() => removeFromList(item)}></button>
          </li>))}
      </ul>
    </>
  )
}

export default App
