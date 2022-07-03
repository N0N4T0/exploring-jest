import { useState } from "react"

function App() {
  const [newItem, setNewItem] = useState('')
  const [list, setList] = useState(['Diego', 'Lucas', 'Maria'])

  function addToList(){
    setList(state => [...state, 'Novo'])
  }

  return (
    <>
      <input value={newItem} placeholder="Novo item" onChange={e => setNewItem(e.target.value)}/>
      <button onClick={addToList}>Adicionar</button>
      
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
