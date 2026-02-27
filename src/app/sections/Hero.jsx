import React from 'react';
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>María — Full Stack Developer</h1>
                <p> Creo experiencias web funcionales, cuidadas y con un toque artístico. </p>
                <div className="hero-buttons">
                    <a href="/proyectos" className="btn-primary">Ver proyectos</a>
                    <a href="/contacto" className="btn-secondary">Contacto</a>
                </div>
            </div>
            <div className="hero-art"> {/* Aquí puedes poner una ilustración, un SVG abstracto o una imagen artística */}
                <img src="/images/hero-art.png" alt="Arte abstracto" />
            </div>
        </section>
    );
}