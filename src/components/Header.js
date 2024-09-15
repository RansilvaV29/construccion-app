import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Negocio de Ruben</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#inicio" className="hover:text-yellow-400">Inicio</a></li>
                        <li><a href="#servicios" className="hover:text-yellow-400">Servicios</a></li>
                        <li><a href="#proyectos" className="hover:text-yellow-400">Proyectos</a></li>
                        <li><a href="#contacto" className="hover:text-yellow-400">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
