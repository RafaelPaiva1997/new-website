import React from "react";

export default class ITManagement extends React.Component {
    render() {
        return (
            <div className="service-card odd-card">
                <h2 className="service-big-title">{global.dic.services.itmanagement}</h2>
                <div className="service-board">
                    <h3 className="service-title">{global.dic.itmanagement.t1}</h3>
                    <p className="service-text">{global.dic.itmanagement.p1}</p>
                    <ul className="service-list">
                        <li className="service-item">
                            {global.dic.itmanagement.i1}
                        </li>
                        <li className="service-item">
                            {global.dic.itmanagement.i2}
                        </li>
                        <li className="service-item">
                            {global.dic.itmanagement.i3}
                        </li>
                        <li className="service-item">
                            {global.dic.itmanagement.i4}
                        </li>
                        <li className="service-item">
                            {global.dic.itmanagement.i5}
                        </li>
                    </ul>
                </div>
                <div className="service-board bottom-board">
                    <h3 className="service-title">{global.dic.itmanagement.t2}</h3>
                    <p className="service-text">{global.dic.itmanagement.p2}</p>
                    <p className="service-text">{global.dic.itmanagement.p3}</p>
                </div>
            </div>
        );
    }
}
