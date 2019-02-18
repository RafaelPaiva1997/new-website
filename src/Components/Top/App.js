import React from "react";
import { withCookies } from "react-cookie";
import { Route, Redirect } from "react-router-dom";
import { MobileView, BrowserView } from "react-device-detect";
import Header from "../Header/Header.js";
import Home from "../Routes/Home";
import Brand from "../Routes/Brand";
import Services from "../Routes/Services.js";
import MobileCard from "../Cards/MobileCard.js";
import dic from "../../Config/dic.json";
import "./App.css";
import "../Routes/Routes.css";
import "../Cards/Cards.css";

global.smoothScroll = top => window.scrollTo({
    top,
    behavior: 'smooth'
  }
);

class App extends React.Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            language: cookies.get("language") || "en",
            cookies_accepted: cookies.get("cookies_accepted") || false
        };

        this.setLang = this.setLang.bind(this);
        this.cookie = this.cookie.bind(this);
    }

    componentWillMount() {
        global.language = this.state.language;
        global.dic = dic[this.state.language];
    }

    setLang(language) {
        const { cookies } = this.props;
        global.language = language;
        global.dic = dic[language];
        cookies.set("language", language);
        this.setState({ language });
    }

    cookie() {
        const { cookies } = this.props;
        cookies.set("cookies_accepted", true);
        this.setState({ cookies_accepted: true });
    }

    render() {
        return (
            <div id="app">
                <BrowserView>
                    <Header setLang={this.setLang} />
                    <Route exact path="/" render={() => <Redirect to="/home"/>} />
                    <Route exact path="/home" render={() => <Home />} />
                    <Route exact path="/brand" render={() => <Brand />} />
                    <Route exact path="/services" render={() => <Services />} />
                    <Route exact path="/projects" render={() => <div />} />
                </BrowserView>
                <MobileView>
                    <Route path="/" render={() => <MobileCard mobile/>} />
                </MobileView>
            </div>
        );
    }
}

export default withCookies(App);
