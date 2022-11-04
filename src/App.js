import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// component
import Home from './pages/Home/Home';
import All from './pages/Category/All';
import Digital from './pages/Category/Digital';
import Fashion from './pages/Category/Fashion';
import Car from './pages/Category/Car';
import Living from './pages/Category/Living';
import Sport from './pages/Category/Sport';
import Other from './pages/Category/Other';

// data
import navData from './assets/NavData';
import indexProduct from './assets/indexProduct';
import itemData from './assets/itemData';
import Hot from './pages/Category/Hot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home navData={navData} indexProduct={indexProduct} itemData={itemData} />} />
        <Route path='/all' element={<All navData={navData} indexProduct={indexProduct} itemData={itemData} />} />
        <Route path='/digital' element={<Digital navData={navData} indexProduct={indexProduct} itemData={itemData} />} />
        <Route path='/fashion' element={<Fashion navData={navData} indexProduct={indexProduct} itemData={itemData} />} />
        <Route path='/car' element={<Car navData={navData} indexProduct={indexProduct} itemData={itemData} />} />
        <Route path='/living' element={<Living navData={navData} indexProduct={indexProduct} itemData={itemData} />} />
        <Route path='/sport' element={<Sport navData={navData} indexProduct={indexProduct} itemData={itemData} />} />
        <Route path='/other' element={<Other navData={navData} indexProduct={indexProduct} itemData={itemData} />} />
        <Route path='/hot' element={<Hot/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

      // Route map 반복문 (element에서 막힘)
        {/* {navData.map((a, i) => {
          return (
              <Route key={i} path={navData[i].link} element={<All navData={navData} indexProduct={indexProduct} itemData={itemData} />} />
          );
        })} */}

        // 