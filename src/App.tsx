import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages'
import Detail from './pages/detail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="todo/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
