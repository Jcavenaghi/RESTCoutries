import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 12;



    useEffect(() => {
        fetchCountries();
    }, [currentPage]);

    const fetchCountries = async () => {
        const startIndex = (currentPage - 1) * countriesPerPage;
        const endIndex = startIndex + countriesPerPage;

        try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();

        setCountries(data.slice(startIndex, endIndex));
        } catch (error) {
        console.error('Error fetching countries:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {countries.map((country) => (
                <div key={country.name.common} className="p-4 bg-customBeige rounded-md shadow-md hover:shadow-2xl transition duration-300">
                    <Link key={country.name.common} to={`/countryInfo/${country.name.common}`}>
                        <h2 className="text-lg font-serif font-semibold mb-2 hover:text-emerald-600 transition duration-100">{country.name.common}</h2>
                    </Link>
                    {country.flags && <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-full h-auto" />}
                </div>
            ))}
        </div>
        <div className="mt-4">
            <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 mr-2"
            >
            Anterior
            </button>
            <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="bg-blue-500 text-white px-4 py-2"
            >
            Siguiente
            </button>
        </div>
        </div>
    );
};

export default Home;