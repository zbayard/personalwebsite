import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Particles from 'react-particles-js';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';


function App() {
  return (
    <>
    <Particles
      className='particles-canvas'
      params={{
        particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
              }
            }
          }
        }
      }
    />
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Skills/>
    </>
  );
}

export default App;
