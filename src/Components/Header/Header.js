import React from "react";
import { withRouter } from "react-router-dom";
import Links from "./Links";
import LangControl from "./LangControl";
import "./Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { home: this.props.location.pathname.includes("home") };

        this.scroll = this.scroll.bind(this);
    }

    componentWillMount() {
        if (this.props.location.pathname.includes("home"))
            window.onscroll = this.scroll
    }

    componentWillUnmount() {
        window.onscroll = false;
    }

    componentWillReceiveProps(props) {
        if (props.location.pathname.includes("home"))
            window.onscroll = this.scroll;
        else
            window.onscroll = false;
        this.setState({ home: props.location.pathname.includes("home") &&  window.scrollY < 150}); 
    }

    scroll() {
        if (window.scrollY > 150 && this.state.home)
            this.setState({ home: false });
        if (window.scrollY < 150 && !this.state.home)
            this.setState({ home: true });
    }

    render() {
        return (
            <div id="header" className={this.state.home ? undefined : "white-back"}>
                <Links linkClass={this.state.home ? "link" : "link_def"} />
                <LangControl home={this.state.home} {...this.props} />
            </div>
        );
    }
}

export default withRouter(Header);
