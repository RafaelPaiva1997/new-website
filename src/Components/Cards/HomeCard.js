import React from "react";
import { withRouter } from "react-router-dom";

class HomeCard extends React.Component {
    render() {
        return (
            <div className="fullscreen dis-card">
                <img
                    id="background"
                    className="fullscreen"
                    src="https://imgur.com/2GBnnWJ.jpg"
                    alt="background"
                />
                <div id="darken" className="fullscreen" />
                <div id="home-card">
                    <h1 id="name">{global.dic.homecard.name}</h1>
                    <p id="under-name">
                        {global.dic.homecard.desc}{" "}
                        <span
                            id="learn-more"
                            onClick={() => this.props.history.push("/services")}
                        >
                            {global.dic.homecard.learn}
                        </span>
                    </p>
                </div>
                <i
                    id="read-down"
                    className="fa fa-angle-double-down"
                    onClick={() =>
                        global.smoothScroll(
                            global.followup.current.offsetTop - 50
                        )
                    }
                />
            </div>
        );
    }
}

export default withRouter(HomeCard);
