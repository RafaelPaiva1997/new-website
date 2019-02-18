import React from "react";
import HomeCard from "../Cards/HomeCard";
import FollowUp from "../Cards/FollowUp";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    global.followup = React.createRef();
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <HomeCard />
        <FollowUp />
      </div>
    );
  }
}
