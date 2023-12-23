import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-customGray p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-emerald-300 transition duration-200">
          RESTCountries
        </Link>
        <div>
          <Link to="/home" className="text-white mr-4 hover:text-emerald-300 transition duration-200">
            Home
          </Link>
          {/* Puedes agregar más enlaces aquí según sea necesario */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;