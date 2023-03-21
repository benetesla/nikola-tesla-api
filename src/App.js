
import './App.css';
import Home from './components/Home/Home';
import Patentes from './components/Patentes/Patentes';
import Corrent from './components/Corrent/Corrent';
import Experimentos from './components/Experimentos/Experimentos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patentes" element={<Patentes />} />
          <Route path="/corrents" element={<Corrent />} />
          <Route path="/experimentos" element={<Experimentos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
