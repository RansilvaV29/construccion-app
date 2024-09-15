import React from 'react';

const Contacto = () => {
    return (
        <section id="contacto" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Contáctanos</h2>
                <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Correo"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Mensaje"
                        ></textarea>
                    </div>
                    <button className="w-full bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600 transition duration-300">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contacto;
