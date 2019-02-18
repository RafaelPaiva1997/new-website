import React from "react";
import { withRouter } from "react-router-dom";

class Brand extends React.Component {
    render() {
        window.scrollTo(0, 0);
        return (
            <div id="brand">
                <div id="logo">
                    <p className="p_name">Paiva</p>
                    <p className="p_logo">iT</p>
                </div>
                <p id="sub-logo">Information Technology Services</p>
                <div id="under-logo">
                    <h2 id="brand-title">{global.dic.brand.title}</h2>
                    {["p1", "p2"].map(e => (
                        <p className="brand-text" key={e}>
                            {global.dic.brand[e]}
                        </p>
                    ))}
                </div>
                <span
                    className="footer-link"
                    onClick={() => this.props.history.push("/services")}
                >
                    {global.dic.aboutme.l2}
                </span>
            </div>
        );
    }
}

export default withRouter(Brand);