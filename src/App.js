import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';
import CountryPage from './pages/CoutryPage';
import { CountryProvider } from './context/CountryState';

import './App.css';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <CountryProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/country-details/:name" element={<CountryPage />} />
          </Routes>
        </CountryProvider>
      </div>
      <Footer />
    </>  
  );
}

export default App;