import React from "react";
import { withRouter } from "react-router-dom";
import CustomLink from "../Generic/CustomLink";

class Links extends React.Component {
    constructor(props) {
        super(props);

        this.contacts = this.contacts.bind(this);
    }

    contacts() {
        this.props.history.push("/home");
        setTimeout(
            () =>
                global.smoothScroll(
                    global.followup.current.offsetTop - 50
                ),
            1
        );
    }

    render() {
        return (
            <div id="links-box">
                {global.dic.header.links.map(e => (
                    <CustomLink
                        to={e}
                        cont={e}
                        key={e}
                        regularClass={this.props.linkClass}
                        activeClass={
                            this.props.linkClass +
                            " active_" +
                            this.props.linkClass
                        }
                    >
                        {global.dic.header[e]}
                    </CustomLink>
                ))}
                <span
                    className={this.props.linkClass}
                    onClick={this.contacts}
                >
                    {global.dic.header.contacts}
                </span>
            </div>
        );
    }
}

export default withRouter(Links);
