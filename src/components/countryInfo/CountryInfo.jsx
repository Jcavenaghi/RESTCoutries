// CountryInfo.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CountryInfo() {
  const { name } = useParams(); // Obtén el parámetro de la ruta (nombre del país)
  const [countryDetails, setCountryDetails] = useState(null);
	const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await response.json();

        if (data && data.length > 0) {
          setCountryDetails(data[0]);
        } else {
          // Manejar el caso en el que no se encuentra información para el país
          console.error(`No se encontró información para el país: ${name}`);
        }
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [name]);

	const handleGoBack = () => {
    navigate(-1); // Navegar hacia atrás
  };

  if (!countryDetails) {
    // Puedes mostrar un indicador de carga o un mensaje de error aquí
    return <div>Cargando...</div>;
  }

  const { flags, currencies, maps, population, coatOfArms, borders, independent, region, subregion } = countryDetails;

  return (
    <div className="container mx-auto mt-8 bg-customBeige rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <img src={flags?.svg} alt={`${name} flag`} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 p-4">
          <div className="flex items-center justify-center mb-4">
            {coatOfArms && (
              <img src={coatOfArms.png} alt={`${name} coat of arms`} className="w-12 h-auto mr-4" />
            )}
            <h1 className="text-3xl text-center font-semibold">{name}</h1>
          </div>
					{region && subregion && (
            <div className="mb-4 text-lg font-semibold">
              {`${region}, ${subregion}`}
            </div>
          )}
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Moneda</h2>
            {currencies && Object.values(currencies).map((currency) => (
              <p key={currency.name}>{currency.name} ({currency.symbol})</p>
            ))}
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Población</h2>
            <p>{population}</p>
          </div>
          {borders && borders.length > 0 && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Países Fronterizos</h2>
              <p className="text-sm">{borders.join(', ')}</p>
            </div>
          )}
					{independent !== undefined && (
            <div className={`mb-4 text-lg font-semibold ${independent ? 'text-green-500' : 'text-red-500'}`}>
              {independent ? 'Independizado' : 'No Independizado'}
            </div>
          )}
          {maps && maps.openStreetMaps && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Ubicación en OpenStreetMap</h2>
              <a href={maps.openStreetMaps} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500">
                Ver en OpenStreetMap
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
