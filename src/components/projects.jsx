import React, { Component } from "react";
import Project from "./project.jsx";
import Project_info from "./project_information.json";
import Navbar from "./navbar.jsx";
import { Col, Container, Row } from "react-bootstrap";

class Projects extends Component {
    state = {};
    constructor() {
        super();
        this.state.project_info = Project_info;
        this.create_projects = this.create_projects.bind(this);
        this.state.projects = this.create_projects();
        this.handlePress = this.handlePress.bind(this);
        this.state.activeIndex = 0;
    }
    create_projects() {
        return this.state.project_info.projects.map((p, i) => {
            let hidden = this.state.activeIndex === i ? false : true;
            let projectStyle = {
                position: "absolute",
                opacity: i === this.state.activeIndex ? 1 : 0,
                zIndex: hidden ? 0 : 3,
                transition: "opacity 1s ease",
                width: "100%",
                maxHeight: "500px",
                minHeight: "500px",
                minWidth: "0px",
            };
            return (
                <Project
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    img={this.state.project_info.img_path + p.img}
                    index={i}
                    link={p.link}
                    activeIndex={this.state.activeIndex}
                    projectStyle={projectStyle}
                />
            );
        });
    }
    handlePress(new_active) {
        let new_state = { ...this.state };
        new_state.activeIndex = new_active;
        this.setState(new_state);
    }
    render() {
        return (
            <Container
                fluid="xl"
                className="main-content"
                style={{ minWidth: "430px" }}>
                <Row className="h-100" style={{ minHeight: "500px" }}>
                    <Col xs={3} md={2} className="project-buttons bg-dark">
                        <Navbar
                            titles={this.titles_to_array(
                                this.state.project_info.projects
                            )}
                            activeIndex={this.state.activeIndex}
                            handlePress={this.handlePress}
                        />
                    </Col>
                    <Col xs={9} md={10} className="bg-secondary text-white p-0">
                        {this.create_projects()}
                    </Col>
                </Row>
            </Container>
        );
    }
    titles_to_array(projects) {
        var array = [];
        projects.map((p) => {
            array.push({ title: p.title, key: p.title });
            return p;
        });
        return array;
    }
}

export default Projects;
