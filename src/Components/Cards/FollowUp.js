import React from "react";
import { withRouter } from "react-router-dom";

class FollowUp extends React.Component {
    render() {
        return (
            <div ref={global.followup} id="follow-up">
                <div id="follow-up-div">
                    <h2 id="follow-up-title">{global.dic.aboutme.title}</h2>
                    {["p1", "p2", "p3"].map(e => (
                        <p className="follow-up-text" key={e}>
                            {global.dic.aboutme[e]}
                        </p>
                    ))}
                    <ul>
                        {["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8"].map(
                            e => (
                                <li className="follow-up-item" key={e}>
                                    {global.dic.aboutme[e]}
                                </li>
                            )
                        )}
                    </ul>
                    {["p4", "p5"].map(e => (
                        <p className="follow-up-text" key={e}>
                            {global.dic.aboutme[e]}
                        </p>
                    ))}
                </div>
                <div id="footer">
                    <span
                        className="footer-link"
                        onClick={() => this.props.history.push("/brand")}
                    >
                        {global.dic.aboutme.l1}
                    </span>
                    <span
                        className="footer-link"
                        onClick={() => this.props.history.push("/services")}
                    >
                        {global.dic.aboutme.l2}
                    </span>
                </div>
            </div>
        );
    }
}

export default withRouter(FollowUp);
