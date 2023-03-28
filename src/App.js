import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
<<<<<<< HEAD
import Dashboar from './components/dashboar';
=======
import ImageSlider from './components/ImageSlider';
>>>>>>> 8d9dacad8419c4f5304c0c0d86587cb286f86a42
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
<<<<<<< HEAD
      <Header />
        <div className=' sticky top-24'>
        <Navbar />
        </div>
        <div className=' relative -z-10 -top-[40rem] left-[9%]  w-[100%]'>
        <Dashboar/>
        </div>
=======
      <Header/>
      <Navbar/>
      <div style={containerStyles}>
       <ImageSlider slides={slides} />
      </div>
>>>>>>> 8d9dacad8419c4f5304c0c0d86587cb286f86a42
    </>
  );
}

export default App;
