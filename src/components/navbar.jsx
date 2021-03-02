import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class Navbar extends Component {
    state = {};
    constructor(props) {
        super();
        this.state.titles = props.titles;
        this.state.index = 0;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i) {
        let new_state = { ...this.state };
        new_state.index = i;
        this.setState(new_state);
    }
    render() {
        return (
            <div className="project-buttons__navbar row">
                <Nav className="flex-column w-100">
                    {this.state.titles.map((title, i) => {
                        return (
                            <Nav.Link
                                className={
                                    "project-buttons__button " +
                                    (i === this.props.activeIndex
                                        ? "project-buttons__button--active"
                                        : "")
                                }
                                onClick={() => this.props.handlePress(i)}
                                key={title.key}>
                                <p role="button">{title.title}</p>
                            </Nav.Link>
                        );
                    })}
                </Nav>
            </div>
        );
    }
}

export default Navbar;
