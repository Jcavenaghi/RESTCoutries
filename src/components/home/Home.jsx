import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const continents = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  const [selectedContinent, setSelectedContinent] = useState('');
  const countriesPerPage = 12;

  useEffect(() => {
    fetchCountries();
  }, [currentPage, selectedContinent]);

  const fetchCountries = async () => {
    const startIndex = (currentPage - 1) * countriesPerPage;
    const endIndex = startIndex + countriesPerPage;

    try {
      let apiUrl = 'https://restcountries.com/v3.1/all';

      // Si se ha seleccionado un continente, ajusta la URL
      if (selectedContinent) {
        apiUrl = `https://restcountries.com/v3.1/region/${selectedContinent}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      setCountries(data.slice(startIndex, endIndex));
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4 text-left">
        <label htmlFor="continentFilter" className="font-bold mr-2">Filtrar por Continente:</label>
        <select
          id="continentFilter"
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          className="border border-gray-400 rounded px-2 py-1 text-left"
        >
          <option value="">Todos los Continentes</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent.charAt(0).toUpperCase() + continent.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {countries.map((country) => (
          <div key={country.name.common} className="p-4 bg-customBeige rounded-md shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-110 hover:bg-cyan-300">
            <Link key={country.name.common} to={`/countryInfo/${country.name.common}`}>
              <h2 className="text-lg font-serif font-semibold mb-2 hover:text-red-600 transition duration-100">{country.name.common}</h2>
            </Link>
            {country.flags && <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-full h-auto" />}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-customGray text-white hover:bg-gray-800 font-bold py-2 px-4 mx-4 rounded"
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="bg-customGray text-white hover:bg-gray-800 font-bold py-2 px-4  mx-4 rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Home;
