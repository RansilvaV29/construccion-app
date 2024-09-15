import React from 'react';

const Servicios = () => {
    const servicios = [
        { titulo: "Construcción de casas", descripcion: "Ofrecemos construcción de viviendas personalizadas." },
        { titulo: "Remodelaciones", descripcion: "Transformamos espacios con calidad y eficiencia." },
        { titulo: "Instalación de techos", descripcion: "Instalación de techos resistentes y de alta calidad." },
    ];

    return (
        <section id="servicios" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicios.map((servicio, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Servicios;
