// Argentina.jsx
import React, { useEffect, useState } from 'react';
import './Argentina.css';

function Argentina () {
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    const fetchArgentinaDetails = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/name/argentina');
        const data = await response.json();

        if (data && data.length > 0) {
          setCountryDetails(data[0]);
        } else {
          console.error('No se encontró información para Argentina.');
        }
      } catch (error) {
        console.error('Error fetching Argentina details:', error);
      }
    };

    fetchArgentinaDetails();
  }, []);

  if (!countryDetails) {
    return <div>Cargando...</div>;
  }

  const { flags, population, capital, region, subregion, currencies } = countryDetails;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Argentina</h1>
      <div className="flag-container">
        <img src={flags?.svg} alt="Bandera de Argentina" className="flag" />
      </div>
      <div className="p-4 bg-customBeige rounded-md shadow-md">
        <p>Población: {population}</p>
        <p>Capital: {capital}</p>
        <p>Región: {region}</p>
        <p>Subregión: {subregion}</p>
        <p>Moneda: {currencies.ARS.name} ({currencies.ARS.symbol})</p>
      </div>
    </div>
  );
};

export default Argentina;
