import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu';
import './style/app.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen}/>
      <Header/>
      <About/>
      <Gallery/>
      <Reviews/>
      <Contact/>
      <Map/>
      <Footer/>
      <BurgerMenu open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
