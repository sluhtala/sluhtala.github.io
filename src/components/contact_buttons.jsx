import React, { Component } from "react";

class ContactButtons extends Component {
    state = {
        social: [
            {
                name: "linkedin",
                src: "https://www.linkedin.com/in/sasu-luhtala-4abb7885/",
                img: "linkedin.png",
            },
            {
                name: "twitter",
                src: "https://twitter.com/themalmana",
                img: "twitter.png",
            },
            {
                name: "github",
                src: "https://github.com/sluhtala",
                img: "github.png",
            },
            {
                name: "email",
                src: "mailto:sluhtala@me.com",
                img: "email.png",
            },
        ],
    };
    render() {
        let logodir = "./images/logos/";
        return (
            <div className="social">
                {this.state.social.map((social) => {
                    return (
                        <a href={social.src} key={social.name}>
                            <img
                                src={logodir + social.img}
                                alt={social.name}></img>
                        </a>
                    );
                })}
            </div>
        );
    }
}

export default ContactButtons;
