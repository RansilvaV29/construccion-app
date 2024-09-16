import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Título del sitio */}
                <h1 className="text-3xl font-bold">Negocio de ruben</h1>
                {/* Botón del menú hamburguesa para dispositivos pequeños */}
                <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                    </svg>
                </button>
                {/* Menú de navegación */}
                <nav className={`absolute top-16 left-0 w-full bg-gray-800 md:static md:w-auto md:bg-transparent ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-right md:ml-auto">
                        <li className="p-4 md:p-0"><a href="#inicio" className="block hover:text-yellow-400">Inicio</a></li>
                        <li className="p-4 md:p-0"><a href="#servicios" className="block hover:text-yellow-400">Servicios</a></li>
                        <li className="p-4 md:p-0"><a href="#proyectos" className="block hover:text-yellow-400">Proyectos</a></li>
                        <li className="p-4 md:p-0"><a href="#contacto" className="block hover:text-yellow-400">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
