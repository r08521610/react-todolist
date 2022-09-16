import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLocalStorage } from 'react-use';
import './App.css'
import Home from './pages'
import Detail from './pages/detail'
import { ITodo } from './types';

function App() {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home todos={todos} setTodos={setTodos} />} />
        <Route path="todo/:id" element={<Detail todos={todos} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
