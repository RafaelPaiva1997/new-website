import React from "react";

export default class Consulting extends React.Component {
    render() {
        return (
            <div className="service-card odd-card">
                <h2 className="service-big-title">{global.dic.services.consulting}</h2>
                <div className="service-board">
                    <h3 className="service-title">{global.dic.consulting.t1}</h3>
                    <p className="service-text">{global.dic.consulting.p1}</p>
                    <p className="service-text">{global.dic.consulting.p2}</p>
                </div>
                <div className="service-board bottom-board">
                    <h3 className="service-title">{global.dic.consulting.t2}</h3>
                    <p className="service-text">{global.dic.consulting.p3}</p>
                    <p className="service-text">{global.dic.consulting.p4}</p>
                    <p className="service-text">{global.dic.consulting.p5}</p>
                </div>
            </div>
        );
    }
}
