import React from "react";

export default class LangControl extends React.Component {
    render() {
        return (
            <div
                id="lang-control"
                className={
                    "dis-card " + (this.props.home ? undefined : "lang-grey")
                }
                onClick={() => this.props.setLang(global.dic.nextlang)}
            >
                {global.language && global.language.toUpperCase()}
            </div>
        );
    }
}
