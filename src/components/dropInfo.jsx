import React, { Component, createRef } from "react";
import { Accordion, Card } from "react-bootstrap";
import ArrowLogo from "../images/logos/chevron-bottom.svg";

class DropInfo extends Component {
    state = {
        isOn: false,
        description: "",
        logo_style: {
            width: "20px",
            filter: "invert(1)",
            transform: "",
            transition: "transform 0.3s ease",
        },
    };
    constructor(props) {
        super(props);
        this.state.description = props.description;
        this.handleClick = this.handleClick.bind(this);
        this.img_ref = createRef(null);
    }
    handleClick() {
        let new_state = { ...this.state };
        new_state.isOn = !this.state.isOn;
        new_state.logo_style = { ...this.state.logo_style };
        new_state.logo_style.transform = this.state.isOn
            ? ""
            : "rotate(180deg)";
        this.setState(new_state);
    }
    render() {
        let drop_data = (
            <Card.Body className="bg-dark" id="dropdata">
                {this.state.description}
            </Card.Body>
        );
        return (
            <Accordion className="">
                <div className="border-none">
                    <Accordion.Toggle
                        as={Card.Header}
                        className="dropdown-button vh-3"
                        variant="link"
                        eventKey="0"
                        onClick={() => this.handleClick()}>
                        <img
                            ref={this.img_ref}
                            key="button-arrow"
                            className="isRotated"
                            src={ArrowLogo}
                            alt="button-arrow"
                            style={this.state.logo_style}></img>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        {drop_data}
                    </Accordion.Collapse>
                </div>
            </Accordion>
        );
    }
}

export default DropInfo;
