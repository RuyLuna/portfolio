import './CVPage.css';
import CVNavbar from '../../components/CVNavbar/CVNavbar';

export default function CVPage() {
    return (
        <div className="cv-page-wrapper">
            <CVNavbar></CVNavbar>

            <main className="cv-content-container">

                <header className="cv-header">
                    <h1> Ruy Jesé Luna Sandoval</h1>
                    <p className="cv-tagline">
                        Desarrollador fullstack con 2 años de experiencia entregando aplicaciones escalables y de alto rendimiento utilizadas por varias empresas en mi área en diversas industrias como finanzas, comercio minorista y eventos deportivos.
                        <br />
                        Especializado en Angular, a través de diferentes versiones desde AngularJS hasta Angular 20.
                        <br />
                        Diseñé arquitecturas de bases de datos SQL y NoSQL teniendo en cuenta las necesidades de la aplicación y de nuestro equipo.
                        <br />
                        Participé en reuniones estratégicas para planificar la calidad del producto, el diseño, las prioridades y las futuras iniciativas.
                    </p>
                </header>

                <section className="cv-section">
                    <h2>Experiencia Laboral</h2>
                    <div className="experience-item">
                        <h3>Desarrollador Fullstack - GNH Corporation.</h3>
                        <p className="period">Sept. 2023 – Presente</p>
                        <ul>
                            <li>
                                GNH es la empresa matriz de varias otras empresas pertenecientes a diferentes sectores como finanzas,
                                deportes profesionales y el ámbito farmacéutico.
                            </li>
                            <li>
                                Desarrollé el sistema de cuentas por cobrar desde cero, ahora utilizado en toda la empresa, que se conecta con los sistemas de
                                contabilidad, inventario y ventas.
                            </li>
                            <li>
                                Desarrollé el sistema de órdenes de compra que ahora se utiliza en toda la empresa e interactúa con el sistema de cuentas por pagar
                                y el sistema de inventario.
                            </li>
                            <li>
                                Ayudé con un sistema de contabilidad que compila información de otros sistemas utilizados en la empresa y luego
                                exporta esa información a CONTPAQi Contabilidad.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Desarrollador Interno - GNH Corporation.</h3>
                        <p className="period">Nov. 2022 – Dic. 2022</p>
                        <ul>
                            <li>
                                Corrección de errores y documentación en un sistema de escritorio Microsoft .NET.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="cv-section">
                    <h2>Educación</h2>
                    <div className="education-item">
                        <h3>Ingeniero en Tecnologías de la Información - Universidad Politécnica de Sinaloa</h3>
                        <p className="period">2020 – 2023</p>
                    </div>
                    <div className="education-item">
                        <h3>Bachillerato Técnico - CBTis 051</h3>
                        <p className="period">2017 – 2020</p>
                    </div>
                </section>
                <section className="cv-section">
                    <h2>Habilidades e Intereses</h2>
                    <div className="interests-content">
                        <ul>
                            <li>Idiomas: Inglés C1, Español Nativo.</li>
                            <li>Habilidades Duras: Angular, React, Typescript, NodeJS, MySQL, Git, Docker, Amazon AWS, PHP, MongoDB, Jira.</li>
                            <li>Habilidades Blandas: Adaptable, Aprendizaje Rápido, Planificación, Proactivo, Comunicativo, Responsable.</li>
                            <li>Intereses: Música, Bajo Eléctrico, Videojuegos, Películas, Baloncesto y la NBA.</li>
                        </ul>
                    </div>
                </section>

            </main>
        </div>
    );
}
