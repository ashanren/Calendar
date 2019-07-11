
/*
 * @file Days.jsxx
 * @author Jarel Pellew
 * @desc  Header with the week days for Month view
 */

import React from "react";
import { addDays, startOfWeek, format } from "date-fns";

function Days(props) {
  const render_days = () => {
    const days        = [];
    const start       = startOfWeek(props.current_month, {weekStartsOn: (props.week_start || 0)});
    const date_format = "EEEE";

    for (let i = 0; i < 7; ++i) {
      days.push(<div className = "col col-center" key = {i}>{format(addDays(start, i), date_format)}</div>);
    }
    return days;
  }

  return (
    <div>
      <div className = "days row">{render_days()}</div>
    </div>
  );
}

export default Days;

