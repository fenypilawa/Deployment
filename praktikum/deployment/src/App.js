import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import HTML from './pages/HTML';
import CSS from './pages/CSS';
import Navbar from './Component/navbar';

function App() {
  return (
    <div className='font-monospace'>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<HTML />} /> 
      <Route path="/css" element={<CSS />} /> 
    </Routes>
    </div>
  );
}

export default App;
