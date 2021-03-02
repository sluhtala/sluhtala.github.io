import React, { Component } from "react";
import "./App.css";
import MyHeader from "./components/my_header.jsx";
import Projects from "./components/projects.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyFooter from "./components/footer.jsx";

class App extends Component {
    state = {};
    render() {
        return (
            <Container fluid="xl" className="bg-light p-0">
                <div className="d-flex flex-column min-vh-100">
                    <MyHeader />
                    <Projects />
                    <MyFooter />
                </div>
            </Container>
        );
    }
}

export default App;
