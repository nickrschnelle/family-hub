import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([])
  const [newItem, setNewItem] = useState('')
  return (
    <>
      <nav>
        <ul>
          <li>shopping list</li>
        </ul>
      </nav>
      <main>
          <button onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setList([])
            setNewItem('')
          }}>reset</button>
        <form onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          setList(current => ([newItem, ...current]))
          setNewItem('')
        }}>
          <input placeholder="add new item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        </form>
        <ul>
          {list.map(listItem => (
            <li>{listItem}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
