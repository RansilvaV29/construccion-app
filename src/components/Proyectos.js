import React from 'react';

const Proyectos = () => {
    const proyectos = [
        { img: 'proyecto1.jpg', titulo: 'Proyecto 1' },
        { img: 'proyecto2.jpg', titulo: 'Proyecto 2' },
        { img: 'proyecto3.jpg', titulo: 'Proyecto 3' },
    ];

    return (
        <section id="proyectos" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Proyectos Realizados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {proyectos.map((proyecto, index) => (
                        <div key={index} className="relative">
                            <img src={proyecto.img} alt={proyecto.titulo} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                                <h3 className="text-xl font-semibold">{proyecto.titulo}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Proyectos;
