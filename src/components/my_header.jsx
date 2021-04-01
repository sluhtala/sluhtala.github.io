import React, { Component } from "react";
import ContactButtons from "./contact_buttons.jsx";
import PersonalInfo from "./personal_information.json";
import { Container } from "react-bootstrap";
import DropInfo from "./dropInfo.jsx";

function header_style(img) {
    const style = {
        backgroundImage: `url(${img})`,
        backgroundPosition: "center 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "brightness(90%) contrast(115%)",
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
    };
    return style;
}

class MyHeader extends Component {
    state = {
        name: PersonalInfo.name,
        description: PersonalInfo.description,
        img: "../images/" + PersonalInfo.img,
    };

    render() {
        return (
            <div className="App my-header">
                <Container
                    fluid
                    className="my-header__basic text-white p-1 p-sm-auto">
                    <div
                        className="my-header__bg-image text-white p-1 p-sm-auto"
                        style={header_style(this.state.img)}></div>
                    <Container className="mx-2 col-12 col-sm-8 col-xl-8">
                        <div className="d-table d-sm-block p-2 p-sm-auto">
                            <h1>{this.state.name}</h1>
                            <p className="p-2 h-auto d-none d-sm-block m-xl-4">
                                {this.state.description}
                            </p>
                            <div className="d-block d-sm-none p-1"></div>
                            <ContactButtons />
                        </div>
                    </Container>
                </Container>
                <Container
                    fluid="true"
                    className="text-white d-block d-sm-none">
                    <DropInfo description={this.state.description} />
                </Container>
            </div>
        );
    }
}

export default MyHeader;
