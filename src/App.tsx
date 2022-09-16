import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import Detail from './pages/detail';
import { RootProvider } from './store';

function App() {
  return (
    <RootProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='todo/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </RootProvider>
  );
}

export default App;
