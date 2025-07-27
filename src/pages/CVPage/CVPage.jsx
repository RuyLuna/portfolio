
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
                        Fullstack developer with 2 years of experience delivering scalable and performant applications used by several companies across my area in diverse industries like finance, retail and sporting events. 
                        <br />
                        Specialized in Angular, across different versions through AngularJS to Angular 20.
                        <br />
                        Architected SQL and NoSQL databases taking into account the needs of the application and of our team.
                        <br />
                        Participated in strategic meetings to plan for product quality, design, priorities, and future initiatives.
                </p>
                </header>

                <section className="cv-section">
                    <h2>Work Experience</h2>
                    <div className="experience-item">
                        <h3>Fullstack Developer - GNH Corporation.</h3>
                        <p className="period">Sept. 2023 – Present</p>
                        <ul>
                            <li>
                                GNH is the parent company of several other companies belonging to different sectors such as finance,
                                professional sports, and the pharmaceutical field.
                            </li>
                            <li>
                                Developed the accounts receivable system from scratch now used companywide, which connects to the
                                accounting, inventory, and sales systems
                            </li>
                            <li>
                                Developed the buying orders system that is now used companywide and interacts with the accounts payable
                                system and inventory system
                            </li>
                            <li>
                                Helped with an accounting system that compiles information from other systems used in the company and then
                                exports that information to CONTPAQi Accounting
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Intern Developer - GNH Corportation.</h3>
                        <p className="period">Nov. 2022 – Dec. 2022</p>
                        <ul>
                            <li>
                                Bug fixes and documentation on a Microsoft .NET Desktop system.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="cv-section">
                    <h2>Education</h2>
                    <div className="education-item">
                        <h3>Information Technology Engineer - Universidad Politecnica de Sinaloa</h3>
                        <p className="period">2020 – 2023</p>
                    </div>
                    <div className="education-item">
                        <h3>Technical Degree - CBTis 051</h3>
                        <p className="period">2017 – 2020</p>
                    </div>
                </section>
                <section className="cv-section">
                    <h2>Skills and interest</h2>
                    <div className="interests-content">
                        <ul>
                            <li>Languages: English C1, Native Spanish.</li>
                            <li>Hard Skills: Angular, React, Typescript, NodeJS, MySQL, Git, Docker, Amazon AWS, PHP, MongoDB, Jira.</li>
                            <li>Soft Skills: Adaptable, Quick learner, Planning, Proactive, Communicative, Responsible.</li>
                            <li>Interests: Music, Bass Guitar, Videogames, Movies, Basketball, and the NBA.</li>
                        </ul>
                    </div>
                </section>

            </main>
        </div>
    );
}