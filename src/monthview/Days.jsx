
import React, { Component } from "react";
import { addDays, startOfWeek, format } from "date-fns";

export default class Days extends Component {
  render_days = () => {
    const days        = [];
    let start         = startOfWeek(this.props.current_month, {weekStartsOn: (this.props.week_start || 0)});
    const date_format = "EEEE";

    for (let i = 0; i < 7; ++i) {
      days.push(<div className = "col col-center" key = {i}>{format(addDays(start, i), date_format)}</div>);
    }
    return days;
  }
  render () {
    return (
      <div>
        <div className = "days row">{this.render_days()}</div>
      </div>
    );
  }
}
