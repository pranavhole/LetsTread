import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Dashboar from './components/dashboar';
function App() {
  return (
    <>
      <Header />
        <div className=' sticky top-24'>
        <Navbar />
        </div>
        <div className=' relative -z-10 -top-[40rem] left-[9%]  w-[100%]'>
        <Dashboar/>
        </div>
    </>
  );
}

export default App;
