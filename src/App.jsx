import { useState } from 'react'
import './App.css'
import './index.css'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

      function Clear(){
        SetTodo("")
    }
    
  return(
    <div className="app-container">
      <TodoList />
    </div>
  )

}

export default App
