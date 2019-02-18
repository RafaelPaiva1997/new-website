import React from "react";

export default class Software extends React.Component {
    render() {
        return (
            <div className="service-card software">
                <h2 className="service-big-title">{global.dic.services.software}</h2>
                <div className="service-board">
                    <h3 className="service-title">{global.dic.software.t1}</h3>
                    <p className="service-text">{global.dic.software.p1}</p>
                    <ul className="service-list">
                        <li className="service-item">
                            {global.dic.software.i1}
                        </li>
                        <li className="service-item">
                            {global.dic.software.i2}
                        </li>
                        <li className="service-item">
                            {global.dic.software.i3}
                        </li>
                        <li className="service-item">
                            {global.dic.software.i4}
                        </li>
                        <li className="service-item">
                            {global.dic.software.i5}
                        </li>
                    </ul>
                    <p className="service-text">{global.dic.software.p2}</p>
                </div>
                <div className="service-board bottom-board">
                    <h3 className="service-title">{global.dic.software.t2}</h3>
                    <p className="service-text">{global.dic.software.p3}</p>
                    <ul className="service-list">
                        <li className="service-item">
                            {global.dic.software.i6}
                        </li>
                        <li className="service-item">
                            {global.dic.software.i7}
                        </li>
                        <li className="service-item">
                            {global.dic.software.i8}
                        </li>
                        <li className="service-item">
                            {global.dic.software.i9}
                        </li>
                    </ul>
                    <p className="service-text">{global.dic.software.p4}</p>
                </div>
            </div>
        );
    }
}
