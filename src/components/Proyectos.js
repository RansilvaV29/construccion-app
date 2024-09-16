import React from 'react';

const Proyectos = () => {
    const proyectos = [
        { img: 'https://th.bing.com/th/id/R.66ab06702aa3d755f85c1602a1d67db3?rik=ypbk1YhNNxhS9g&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f616d36e4960c986ba9b97371%2f616d782ecdcba31df7950bdc%2f6358518ba01ff0238fd63f30%2f1692937060530%2fTownCountry1.jpeg%3fformat%3d1500w&ehk=fjgMKLlWnCGRZJGsoiXvNXfy1JTsm0xLMDb%2f%2bVVJREY%3d&risl=&pid=ImgRaw&r=0', titulo: 'Proyecto 1' },
        { img: 'https://client-setting-co-institucional-images.s3.amazonaws.com/credito_para_remodelar_vivienda_f2f5661138.jpg', titulo: 'Proyecto 2' },
        { img: 'https://www.mndelgolfo.com/blog/wp-content/uploads/2021/11/Como-prepararse-para-la-remodelacion-de-una-casa2.jpg', titulo: 'Proyecto 3' },
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
