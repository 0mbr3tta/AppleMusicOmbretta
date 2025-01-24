import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarApple from './components/NavbarApple'
import ContenutoApple from './components/ContentutoApple';
import FooterAppleMusic from './components/FooterAppleMusic';
import APIMusica from './components/APIMusica';
import AltroDaEsplorare from './components/AltroDaEsplorare';
import BarraPlay from './components/Barraplay';

function App() {
  return (
    <div className="app-background">
    <NavbarApple />
     <ContenutoApple />
     <APIMusica/>
     <AltroDaEsplorare/>
     <BarraPlay/>
     <FooterAppleMusic/>
     
    </div>
  );
}

export default App
