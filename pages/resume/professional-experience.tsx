import Layout from '../../components/layout';
import ResumeHeader from '../../components/resume-header';
import Workplace from '../../components/workplace';

export default function SkillsPage() {
    return (
        <Layout>
            <article>
                <ResumeHeader />

                <Workplace
                    title="European&nbsp;Commission /&nbsp;DIGIT"
                    location="Brussels (Belgium)"
                    period="January 2017 - November 2020"
                    summary="Senior architect and full-stack developer"
                >
                    <p>
                        Working as a freelance contractor under Atos in the IT
                        General Directorate, expanding the work that I started
                        in DG EMPL. <em>(See previous experience below).</em>
                    </p>
                    <h4>Projects</h4>
                    <ul>
                        <li>
                            <strong>AGM meetings:</strong> Organization of
                            expert meetings and reimbursement of expenses. This
                            project started in DG EMPL.
                        </li>
                        <li>
                            <strong>APEX-C: </strong>Application for the
                            reimbursement of candidate expenses.
                        </li>
                        <li>
                            <strong>PMO-Mobile AGM:</strong> Integration of the
                            AGM front-office into the PMO Mobile Application.
                            <em> Currently in development.</em>
                        </li>
                    </ul>

                    <h4>Technologies</h4>
                    <ul>
                        <li>
                            HTML5, CSS/SCSS, Javascript, Typescript, React,
                            Redux, Angular, RxJS, eUI
                        </li>
                        <li>
                            Java, Kotlin, Spring Boot, JPA, JMS, Weblogic,
                            Maven, Gradle
                        </li>
                        <li>
                            Oracle DB, MySQL, API Gateway, OpenID Connect, REST
                        </li>
                        <li>
                            Cloud (AWS), Docker, Git, DevOps (CSDR stack), JIRA,
                            Bamboo
                        </li>
                    </ul>
                </Workplace>

                <Workplace
                    title="European&nbsp;Commission /&nbsp;DG&nbsp;EMPL"
                    location="Brussels (Belgium)"
                    period="May 2007 - January 2017"
                    summary="Senior architect, designer and full-stack developer"
                >
                    <p>
                        Freelance contractor under different consortiums (IRIS,
                        Siemens, Atos) at the Employment General Directorate
                        (DG-EMPL).
                    </p>
                    <h4>Projects</h4>

                    <p>
                        Analysis, architecture and development of several
                        systems:
                    </p>
                    <ul>
                        <li>
                            <strong>
                                SWIM, DEFIS, PUBLIGRANT, ANTICIPEDIA:
                            </strong>
                            Grant management, comprising publication,
                            evaluation, selection, budget, prefinancing and
                            follow-up.
                        </li>
                        <li>
                            <strong>AGM Meetings: </strong>Organization of
                            expert meetings and reimbursement of expenses. I was
                            responsible of its inception, including drafting its
                            business case and vision document. Once approved, I
                            took the technical lead as a software architect,
                            being involved in the product design and its
                            implementation. Eventually, it became the corporate
                            solution for meeting organisation in the EC and
                            transfered to DIGIT.
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
                            Maven
                        </li>
                        <li>XML, XSLT, XSL-FO</li>
                        <li>Oracle DB, Oracle Text, SOAP WS, REST WS</li>
                        <li>SVN, Git, JIRA, Bamboo, RUP@EC, PM2, Scrum</li>
                    </ul>
                </Workplace>

                <Workplace
                    title="Tractis"
                    location="Remote - Valladolid, Madrid, Barcelona (Spain)"
                    period="February 2005 - April 2007"
                    summary="Co-founder, CTO, architect, and full-stack developer"
                >
                    <p>
                        <i>Tractis</i> was a start-up with the ambition of
                        making contracts and digital signatures accessible to
                        everyone. It allows creating, collaborative editing and
                        electronic signing of contracts. It ended operations in
                        April 2018.
                    </p>

                    <h4>Tasks</h4>
                    <p>
                        I was involved from the begining as a side project.
                        After some funding, I became its first CTO, being in
                        responsible of the development and operations of the
                        company. Initially, we were three full-time employees
                        and around ten external collaborators.
                    </p>

                    <h4>Technologies</h4>
                    <ul>
                        <li>Ruby on Rails</li>
                        <li>Javascript, jQuery, Capistrano</li>
                        <li>PHP, Wordpress</li>
                        <li>Java applets, Spring framework, Hibernate</li>
                        <li>MySQL, XaDES</li>
                        <li>Track, SVN, Agile development.</li>
                    </ul>
                </Workplace>

                <Workplace
                    title="Telefonica I+D and AXPE Consulting"
                    location="Valladolid (Spain)"
                    period="March 2002 - February 2006"
                    summary="Junior full-stack developer and architect"
                >
                    <p>
                        Started as full-time intern and then as a subcontractor
                        (AXPE consulting) in the ODIN project (formerly TQ).
                        ODIN was the biggest B2B application in Spain at that
                        time and was core to the business of Telefonica Spain.
                    </p>
                    <h4>Tasks</h4>
                    <p>
                        Full stack development, including analysis, design and
                        implementation of screens, programming, and optimization
                        of the system. Also, I performed the rewriting of
                        several modules, including the attachment system, the
                        rule engine and many critical Oracle DB queries.
                    </p>
                    <h4>Technologies</h4>
                    <ul>
                        <li>Primitive Web technologies. CSS, JS and HTML.</li>
                        <li>Java Servlets and JSP on JRun server</li>
                        <li>Oracle DB, XML</li>
                        <li>CVS, Python, scripts (awk, sed, etc), RUP, UML.</li>
                    </ul>
                </Workplace>
            </article>
        </Layout>
    );
}
