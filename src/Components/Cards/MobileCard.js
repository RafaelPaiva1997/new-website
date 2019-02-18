import React from "react";

class MobileCard extends React.Component {
    render() {
        return (
            <div className="fullscreen-mobile dis-card">
                <img
                    id="background"
                    className="fullscreen-mobile"
                    src={"https://imgur.com/2GBnnWJ.jpg"}
                    alt="background"
                />
                <div id="darken" className="fullscreen-mobile" />
                <div id="home-card-mobile">
                    <h1 id="name-mobile">{global.dic.homecard.name}</h1>
                    <p id="under-name-mobile">
                        {global.dic.homecard.desc}
                    </p>
                    <p id="disclaimer">Mobile version under construction please visit on a desktop browser.</p>
                </div>
            </div>
        );
    }
}

export default MobileCard;
