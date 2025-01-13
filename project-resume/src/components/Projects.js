import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Bookie",
            description: "A tourism webpage",
            imgUrl: projImg1,
            url: "https://dennislimbu.github.io/tourismWebPage.github.io/"
        },
        {
            title: "OhMyFood",
            description: "An online booking system for restaurants to pre-order food.",
            imgUrl: projImg2,
            url: "https://dennislimbu.github.io/ohMyFood/"
        },
        {
            title: "Fact Frenzy",
            description: "An interactive quiz platform showcasing HTML, CSS, and JavaScript with responsive design and engaging features.",
            imgUrl: projImg3,
            url: "https://dennislimbu.github.io/FactFrenzy/"

        },
        {
            title: "PennyPilot",
            description: "Simplifies finance management by recording, categorizing, and analyzing spending for better budgeting.",
            imgUrl: projImg4,
            url: "https://pennypilot-ed4fcf68cb92.herokuapp.com/accounts/login/"
        },
        {
            title: "Chirp",
            description: "A platform for users to connect, communicate, and showcase interests through customizable profiles and interactive features.",
            imgUrl: projImg5,
            url: "https://chirp-social-fcb5ac910432.herokuapp.com/"
        },
        {
            title: "LoveBite",
            description: "A romantic food website with recipes and date night ideas to empower home cooks.",
            imgUrl: projImg6,
            url: "https://shivani-seth.github.io/Love-bites/"
        }, 
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    )
}