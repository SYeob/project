import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import navData from './store/NavData';

// component

import Home from './components/pages/index/index.jsx';
import All from './components/pages/All/All';
import Header from './components/Layout/Header/Header';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/all' element={<All />} />
    </Routes>

  );
}

export default App;
