import Layout from '../../components/layout';
import PageHeader from '../../components/page-header';
import Tabs from '../../components/tabs';

export default function SkillsPage() {
    return (
        <Layout>
            <article>
                <PageHeader>Skills</PageHeader>
                <div className="sticky top-0 bg-cool-gray-50 z-10">
                    <Tabs />
                </div>
                <div className="mt-8 prose prose-sm md:prose">
                    {/*<p>*/}
                    {/*    Manuel Víctor Santos López is an experimented*/}
                    {/*    analyst/application architect with good knowledge in Web*/}
                    {/*    technologies, Java, XML and Oracle and broad interests*/}
                    {/*    in Computer Science, Design, Machine Learning and*/}
                    {/*    Software Engineering.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    He is a vocational professional and he has got a*/}
                    {/*    university degree in IT Engineering, speaks English,*/}
                    {/*    French and Spanish and has a very good team spirit. He*/}
                    {/*    is self-motivated and is looking forward to learn new*/}
                    {/*    things all the time. Specific CS related skills:*/}
                    {/*</p>*/}

                    <h3>Programming</h3>

                    <ul>
                        <li>
                            <strong>Foundations:</strong> Algorithms, Data
                            structures, Complexity analysis, Automata/Formal
                            languages, Compilers/Interpreters theory,
                            Information theory, Programming paradigms (Object
                            oriented, Functional, Imperative, Declarative).
                        </li>

                        <li>
                            <strong>Languages:</strong> Java, Kotlin,
                            Javascript, Typescript, Python, C/C++11, Ruby.
                            Others: Mostly forgotten: R, Rust, Haskell,
                            ReasonML/OCaml, Prolog, Lisp, etc.
                        </li>

                        <li>
                            <strong>Web:</strong> HTML, CSS/LESS/SCSS, SVG,
                            Next.js, Webpack, Babel, React, jQuery, RxJS, Redux,
                            KendoUI, Bootstrap.
                        </li>

                        <li>
                            <strong>Frameworks:</strong> Spring (MVC, Data,
                            Security, ...), Ruby on Rails, Django.
                        </li>

                        <li>
                            <strong>Databases:</strong> JPA, Hibernate, Oracle,
                            MySQL, Postgres, Redis, Liquibase.
                        </li>

                        <li>
                            <strong>Version control:</strong> Git, Gitflow,
                            GitHub, SVN, CVS.
                        </li>

                        <li>
                            <strong>Others:</strong> OpenGL, Node.js,
                            Webassembly, GPU computing (CUDA).
                        </li>
                    </ul>

                    <h3>Architecture and Software development process</h3>

                    <ul>
                        <li>
                            <strong>Methodologies:</strong> RUP, Agile (eXtreme
                            Programming, Scrum), Marte (Telefonica), PM2.
                        </li>

                        <li>
                            <strong>Architecture:</strong> Domain Driven Design,
                            Layered architecture, Hexagonal/clean architecture,
                            Microservices, Event Sourcing, CQRS, Dependency
                            Injection, Test Driven Development.
                        </li>

                        <li>
                            <strong>Security:</strong> OWASP 10, Risk
                            assessment, Fortify.
                        </li>

                        <li>
                            <strong>DevOps/CI/CD: </strong>Bamboo, Vercel.
                        </li>
                    </ul>

                    <h3>OS/Administration/Tools</h3>

                    <ul>
                        <li>
                            <strong>Operating Systems: </strong>Windows, Mac
                            OSX, Linux/Unix
                        </li>

                        <li>
                            <strong>Containers:</strong> Docker
                        </li>

                        <li>
                            <strong>Unix/POSIX:</strong> bash, vim, grep, find,
                            make, cat, netcat, ssh, ftp...
                        </li>

                        <li>
                            <strong>IDEs:</strong> VS Code, IntelliJ, Eclipse.
                        </li>

                        <li>
                            <strong>MS Office suite: </strong> MS Word, MS
                            Outlook, MS Excel, MS Powerpoint.
                        </li>

                        <li>
                            <strong>Design:</strong> Gimp, Blender, Pixelmator,
                            Inkscape, Figma, Sketch
                        </li>

                        <li>
                            <strong>Build tools:</strong> Maven, Gradle, NPM,
                            Ant, Make, Cargo, NPM, Cmake
                        </li>

                        <li>
                            <strong>Issue tracking:</strong> JIRA, Trac,
                        </li>

                        <li>
                            <strong>Web/application servers: </strong> Weblogic,
                            Tomcat, Nginx, Apache, NES, SunONE
                        </li>
                    </ul>

                    <h3>Machine Learning, Robotics, Autonomous driving, CG</h3>

                    <ul>
                        <li>
                            <strong>Neural networks and deep learning: </strong>
                            Convolutional, RNN (LSTM &amp; GRU), GANN,
                            Reinforcement learning. Tensorflow, Keras, CAFFE.
                        </li>

                        <li>
                            <strong>Regression/classification/misc.: </strong>
                            Support vector machines, Non linear kernels, PCA,
                            XGBoost, Naïve Bayes. Sklearn, Numpy, Pandas, Data
                            visualization.
                        </li>

                        <li>
                            <strong>
                                Symbolic/problem solvers/classical AI:
                            </strong>
                            A*, alpha-pruning, backtracking, graphs, frames,
                            blackboard systems, inference engines (Prolog,
                            LISP).
                        </li>

                        <li>
                            <strong>Robotics/Autonomous driving: </strong>
                            Planning, Perception, Control (PID, model predictive
                            control), Sensor integration (Kalman filters,
                            particle filters), Dynamic models, System
                            integration (ROS)
                        </li>

                        <li>
                            <strong>Graphics: </strong>Image processing, OpenGL,
                            OpenCV, Ray-tracing, Shaders, Blender, POV-Ray, etc.
                        </li>
                    </ul>
                </div>
            </article>
        </Layout>
    );
}
