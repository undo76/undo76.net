import Layout from '../components/layout';

export default function SkillsPage() {
    return (
        <Layout>
            <article className="prose prose-sm md:prose">
                <h2>Professional experience</h2>
                <section>
                    <h3>DIGIT — European Commission</h3>
                    <p>Brussels (Belgium)</p>
                    <p>January 2017 - November 2020</p>
                    <p>
                        Freelance contractor under Atos as architect and
                        full-stack developer. Continued and expanding the work
                        that I did in DG-EMPL{' '}
                        <em>(See DG-EMPL experience below).</em>
                    </p>
                    <h4>Projects</h4>
                    <ul>
                        <li>
                            <strong>AGM meetings:</strong> Organization of
                            expert meetings and reimbursement of expenses. This
                            project started in DG EMPL and transfered to DIGIT.
                        </li>
                        <li>
                            <strong>APEX-C: </strong>Application for the
                            reimbursement of candidate expenses.
                        </li>
                        <li>
                            <strong>PMO-Mobile AGM:</strong> Integration of the
                            AGM frontoffice into the PMO Mobile application.{' '}
                            <em>In development.</em>
                        </li>
                    </ul>
                    <h4>Technologies</h4>
                    <ul>
                        <li>
                            HTML5, CSS/SCSS, Javascript, Typescript, React,
                            Redux, Angular, RxJS, eUI, Webpack
                        </li>
                        <li>
                            Java, Kotlin, Spring Boot, JPA, Weblogic, Maven,
                            Gradle
                        </li>
                        <li>
                            Oracle DB, MySQL, API Gateway, OpenID Connect, REST
                            webservices
                        </li>
                        <li>Cloud (AWS), Docker</li>
                        <li>Git, DevOps (CSDR stack), JIRA, Bamboo</li>
                    </ul>
                </section>
                <section>
                    <h3>DG EMPL — European Commission</h3>
                    <p>Brussels (Belgium)</p>
                    <p>May 2007 - January 2017</p>
                    <p>
                        Freelance contractor under different consortiums (IRIS,
                        Siemens, Atos) as architect and full-stack developer for
                        several projects in the Employment Directorate and
                        Social Affaires Directorate (DG-EMPL).
                    </p>
                    <h4>Projects</h4>
                    <p>
                        Analysis, architecture and development of several
                        systems:
                    </p>
                    <ul>
                        <li>
                            <strong>
                                SWIM, DEFIS, PUBLIGRANT, ANTICIPEDIA:{' '}
                            </strong>
                            Grant management, comprising publication,
                            evaluation, selection, budget, prefinancing and
                            follow-up.
                        </li>
                        <li>
                            <strong>AGM Meetings: </strong>Organization of
                            expert meetings and reimbursement of expenses.
                            Eventually it became the corporate solution in the
                            EC and transfered to DIGIT. I was responsible of its
                            inception, including business case and vision
                            document. Once approved, I took the technical lead
                            as a software architect, being involved in the
                            product design and its implementation.
                        </li>
                    </ul>
                    <h4>Technologies</h4>
                    <ul>
                        <li>
                            HTML5, CSS/LESS/SCSS, Javascript, React, Redux,
                            Webpack, Grub, Kendo, jQuery
                        </li>
                        <li>
                            Java, Spring framework, JPA, Struts 2, Weblogic,
                            Maven, Ant
                        </li>
                        <li>XML, XSLT, XSL-FO</li>
                        <li>Oracle DB, Oracle Text, SOAP WS, REST WS</li>
                        <li>SVN, Git, JIRA, Bamboo, RUP@EC, PM2, Scrum</li>
                    </ul>
                </section>
                <section>
                    <h3>Tractis</h3>
                    <p>Remote - Valladolid, Madrid, Barcelona (Spain)</p>
                    <p>February 2006 - April 2007</p>
                    <p>
                        Tractis was a start-up company with the ambition of
                        making contracts and digital signatures accessible to
                        everyone, allowing creation, collaborative edition and
                        electronic signatures. I was involved in its inception
                        and after some early investors funding, I became its
                        first CTO, being in charge of the development and
                        operations of the company. Initially we were three
                        full-time employees and around ten external
                        collaborators. It ended operations in April 2018.
                    </p>
                    <h4>Tasks</h4>
                    <p>
                        CTO working hand in hand with the CEO of the company.
                        Product definition, analysis, design of the architecture
                        and infrastructure, operations, security and
                        coordination of the external collaborators.{' '}
                    </p>
                    <h4>Technologies</h4>
                    <ul>
                        <li>Ruby on Rails. Javascript, jQuery, Capistrano</li>
                        <li>Java applets, Spring framework, Hibernate</li>
                        <li>MySQL, XaDES</li>
                        <li>
                            Track, SVN, Agile development (inspired by eXtreme
                            Programming)
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>Telefonica I+D and AXPE Consulting</h3>
                    <p>Valladolid (Spain)</p>
                    <p>March 2002 - February 2006</p>
                    <p>
                        Started as full-time intern and then as a subcontractor
                        (AXPE consulting) in the ODIN project (formerly TQ).
                        ODIN was the biggest B2B application in Spain at that
                        time and was core to the business of Telefonica Spain.
                        In its development participated more than 100 people.
                    </p>
                    <h4>Tasks</h4>
                    <p>
                        Full stack development, including analysis, design and
                        implementation of screens. programming, and optimization
                        of the system. Also, I was in charge of several big
                        refactorings to improve the performance of several
                        modules, including the attachment system, the rule
                        engine and critical Oracle DB queries.{' '}
                    </p>
                    <h4>Technologies</h4>
                    <ul>
                        <li>Primitive Web technologies. CSS, JS and HTML.</li>
                    </ul>
                    <ul>
                        <li>Java Servlets and JSP on JRun server</li>
                    </ul>
                    <ul>
                        <li>Oracle DB, XML</li>
                    </ul>
                    <ul>
                        <li>CVS, Shell scripts (awk, sed, etc), RUP, UML.</li>
                    </ul>
                </section>
            </article>
        </Layout>
    );
}
