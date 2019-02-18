import React from "react";

export default class Hardware extends React.Component {
    render() {
        return (
            <div className="service-card">
                <h2 className="service-big-title">{global.dic.services.hardware}</h2>
                <div className="service-board">
                    <h3 className="service-title">{global.dic.hardware.t1}</h3>
                    <p className="service-text">{global.dic.hardware.p1}</p>
                    <p className="service-text">{global.dic.hardware.p2}</p>
                    <p className="service-text">{global.dic.hardware.p3}</p>
                </div>
                <div className="service-board bottom-board">
                    <h3 className="service-title">{global.dic.hardware.t2}</h3>
                    <p className="service-text">{global.dic.hardware.p4}</p>
                    <ul className="service-list">
                        <li className="service-item">
                            {global.dic.hardware.i1}
                        </li>
                        <li className="service-item">
                            {global.dic.hardware.i2}
                        </li>
                        <li className="service-item">
                            {global.dic.hardware.i3}
                        </li>
                        <li className="service-item">
                            {global.dic.hardware.i4}
                        </li>
                        <li className="service-item">
                            {global.dic.hardware.i5}
                        </li>
                        <li className="service-item">
                            {global.dic.hardware.i6}
                        </li>
                        <li className="service-item">
                            {global.dic.hardware.i7}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
