import Hero from './components/Hero';
import Dock from './components/Dock';
import Characters from './components/Characters';
import Soundtrack from './components/Soundtrack';
import Footer from './components/Footer';

import { VscHome, VscArchive, VscLibrary, VscInfo } from "react-icons/vsc"; // Iconos de React Icons

const items = [
  { icon: <VscHome size={20} />, label: 'Home', onClick: () => {
    const element = document.getElementById('hero');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }},
  { icon: <VscArchive size={20} />, label: 'Grid', onClick: () => {
    const element = document.getElementById('characters');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }},
  { icon: <VscLibrary size={20} />, label: 'Music', onClick: () => {
    const element = document.getElementById('soundtrack');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }},
  { icon: <VscInfo size={20} />, label: 'About', onClick: () => {
    const element = document.getElementById('footer');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }},
];

function App() {
  return (
    <div className="font-orbitron bg-tron-black text-tron-white relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* Sección de Personajes */}
      <div id="characters">
        <Characters />
      </div>

      {/* Sección de Banda Sonora */}
      <div id="soundtrack">
        <Soundtrack />
      </div>

      {/* Dock de Navegación */}
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />

      {/* Footer Tron */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
