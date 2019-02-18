import React from "react";
import Software from "../Cards/Services/Software";
import Consulting from "../Cards/Services/Consulting";
import Hardware from "../Cards/Services/Hardware";
import ITManagement from "../Cards/Services/ITManagement";
import "../Cards/Services/Services.css";

export default class Services extends React.Component {
    render() {
        window.scrollTo(0, 0);
        return(
            <div id="services">
                <Software />
                <Consulting />
                <Hardware />
                <ITManagement />
            </div>
        );
    }
}