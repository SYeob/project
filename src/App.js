import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// component
import Home from './pages/Home/Home';
import All from './pages/Category/All';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/all' element={<All/>} />
        <Route path='/profile' element={<div>das</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
