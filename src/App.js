import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import CountryInfo from './components/countryInfo/CountryInfo.jsx';
import Footer from './components/footer/Footer.jsx';
import Argentina from './components/argentina/Argentina.jsx';
function App() {
  return (
    <Router>
      <div className="App bg-customRed min-h-screen">
        <Navbar />
        <main className="p-4">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/countryInfo/:name" element={<CountryInfo />} />
            <Route path="/specialArg" element={<Argentina />} />
            {/* Otras rutas según sea necesario */}
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
