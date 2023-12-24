import React from 'react';
import { FaGithub, FaEnvelope, FaLink } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-customGray text-white p-4 text-center">
      <div className="flex items-center justify-center space-x-4">
        {/* GitHub */}
        <a
          href="https://github.com/Jcavenaghi"
          target="_blank"
          rel="noopener noreferrer"
          className='hover:text-cyan-400'
        >
          <FaGithub className="w-6 h-6" />
        </a>

        {/* Correo electrónico */}
        <a 
          href="mailto:joaquincavenaghi@gmail.com"
          className='hover:text-cyan-400'
        >
          <FaEnvelope className="w-6 h-6" />
        </a>

        {/* Enlace a la API */}
        <a
          href="https://restcountries.com/"
          target="_blank"
          rel="noopener noreferrer"
          className='hover:text-cyan-400'
        >
          <FaLink className="w-6 h-6" />
        </a>
      </div>

      <p className="mt-2">
        © 2023 Joaquin Cavenaghi. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;