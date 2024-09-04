import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<Body />} />
            <Route path="/services" element={<Body />} />
            <Route path="/contact" element={<Body />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
