import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './components/About/About';
function App() {
  return (
    <BrowserRouter>
      <div className=' sticky top-0 z-10'>
        <Header />
      </div>
      <div className=' sticky top-24'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/about' element={<About/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
