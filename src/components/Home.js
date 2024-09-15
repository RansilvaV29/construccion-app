import React from 'react';

const Home = () => {
    return (
        <section id="inicio" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://edenapp.com/wp-content/uploads/2020/10/shutterstock_158130827.jpg')" }}>
            <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                    <h2 className="text-5xl font-bold mb-4">Construyendo el Futuro</h2>
                    <p className="text-xl">Nos especializamos en todo tipo de trabajos de construcción.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;
