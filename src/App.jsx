import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Reserve from './components/pages/Reserve';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='*' element={<Home/>} />
            <Route path='home' element={<Home/>} />
            <Route path='reserve' element={<Reserve/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
