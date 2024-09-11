import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Vender from './components/Vender';
import Catalogo from './components/Catalogo';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/vender" element={<Vender />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
