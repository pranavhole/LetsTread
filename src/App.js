import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import ImageSlider from './components/ImageSlider';
function App() {

  const slides=[
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.png", title: "forest" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <>
      <Header />
        <div className=' sticky top-24'>
        <Navbar />
        </div>
        <div className=' relative -z-10 -top-[40rem] left-[9%]  w-[100%]'>
        <div style={containerStyles}>
       <ImageSlider slides={slides} />
      </div>
        </div>
    
    </>
  );
}

export default App;
