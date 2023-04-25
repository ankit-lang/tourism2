
import {  Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/navbar';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Signup from './routes/Signup';

function App() {
  return (
    <div className="App">
    
      
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path ="/service" element={<Service/>}/>
      <Route path = "/contact" element={<Contact/>}/>
      <Route path = "/signup" element={<Signup/>}/>
      
      </Routes>
    
    </div>
  );
}

export default App;
