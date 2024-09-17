import React from 'react';

const AcercaDe = () => {
    return (
        <section id="acerca-de" className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">

                {/* Imagen del dueño */}
                <div className="mb-8 lg:mb-0 lg:w-1/2 lg:pr-8">
                    <img
                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt="Ruben"
                        className="rounded-full shadow-lg w-80 h-80 object-cover mx-auto lg:mx-0"
                    />
                </div>

                {/* Texto de "Acerca de Nosotros" */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Acerca de Nosotros</h2>

                    <p className="text-lg text-gray-600 mb-6">
                        Somos una empresa de construcción con más de 10 años de experiencia, comprometida con ofrecer
                        servicios de alta calidad en cada proyecto. Desde el diseño hasta la ejecución,
                        nos aseguramos de cumplir con los más altos estándares para satisfacer las necesidades de nuestros clientes.
                    </p>

                    <p className="text-lg text-gray-600 mb-6">
                        Nuestro equipo está formado por profesionales altamente calificados y dedicados que trabajan
                        para garantizar que cada detalle sea perfecto. Creemos en la importancia de la innovación,
                        la sostenibilidad y el trabajo en equipo.
                    </p>

                    <p className="text-lg text-gray-600">
                        Nos enorgullecemos de ser parte del desarrollo de nuestras comunidades,
                        brindando soluciones constructivas que transforman espacios y mejoran la calidad de vida de las personas.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default AcercaDe;
