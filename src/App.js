import logo from './logo.svg';
import './App.css';


import Hero from './components/Hero';
import Nav from './components/Nav';
import Stats from './components/Stats'
import About from './components/About';
import Reviews from './components/Reviews';

//import Container from './components/Container';
function App() {
  return (
    <>
    <Nav />
    <Hero />
    <Stats />
    <About />
    <Reviews />
    </>
  );
}

export default App;
