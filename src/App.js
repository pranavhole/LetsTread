import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Home from './components/Home/Home';
function App() {
  return (
    <>
      <Header />
        <div className=' sticky top-24'>
        <Navbar />
        </div>
        <Home />  
    </>
  );
}

export default App;
