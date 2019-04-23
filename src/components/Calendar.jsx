
import React, { Component } from "react";
import MonthView from "monthview/MonthView";

export default class Calendar extends Component {
  constructor (state) {
    super(state);
    this.state = { };
  }
  render () {
    return (
      <div className = "calendar">
        <MonthView />
      </div>
    );
  }
}
