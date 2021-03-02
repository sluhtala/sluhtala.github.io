import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Project extends Component {
    state = { anim: true };
    handle_move_animation = () => {
        let active = this.props.activeIndex === this.props.index ? true : false;
        let img_style = {};
        let animation_time = "100s";
        img_style = {
            backgroundImage: "url(" + this.props.img + ")",
            backgroundSize: "auto 200%",
            backgroundPosition: active ? "100% 100%" : "0% 0%",
            position: "absolute",
            width: "100%",
            maxHeight: "inherit",
            minHeight: "inherit",
            transition: "background-position " + animation_time + " linear",
        };
        if (this.state.anim && active) {
            img_style.animation = "bg-image-movement linear " + animation_time;
            img_style.animationDirection = "alternate";
            img_style.animationIterationCount = "infinite";
            this.setState.anim = false;
        }
        return img_style;
    };
    render() {
        let fill = { r: 0, g: 0, b: 0, a: 0.1 };
        let bg_img_style = this.handle_move_animation();
        return (
            <Card
                className="project-card border-0"
                style={this.props.projectStyle}>
                <div className="project-card__bg-image" style={bg_img_style} />
                <div
                    style={{
                        backgroundColor:
                            "rgba(" +
                            fill.r +
                            "," +
                            fill.g +
                            "," +
                            fill.b +
                            "," +
                            fill.a +
                            ")",
                        backgroundImage:
                            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0))",
                        width: "100%",
                        position: "absolute",
                    }}
                    className="h-100 m-0 p-3">
                    <div className="project-card__text">
                        <Card.Title as="h4">
                            <a className={"text-white"} href={this.props.link}>
                                {this.props.title}
                            </a>
                        </Card.Title>
                        <p className="project-descript w-sm-auto">
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Project;
