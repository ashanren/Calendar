
import React from "react";
import { isSameMonth, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, format } from "date-fns";
//import Events from 'components/Events';

function Cells(props) {
  const render_cells = () => {
    const { current_month, selected_date, week_starts_on } = props;
    const month_start   = startOfMonth(current_month);
    const month_end     = endOfMonth(current_month);
    const week_start    = startOfWeek(month_start, {weekStartsOn: (week_starts_on || 0)});
    const week_end      = endOfWeek(month_end, {weekStartsOn: (week_starts_on || 0)});
    const date_format   = "d";
    let formatted_date  = "";
    let days    = [];
    let day     = week_start;
    const rows  = [];

    while (day <= week_end) {
      for (let i = 0; i < 7; ++i) {
        formatted_date = format(day, date_format);
        const value = !isSameMonth(day, month_start) ? "disabled" : isSameDay(day, selected_date) ? "selected" : "";
        days.push(
          <div className = {`col cell ${value}`} key = {day}>
            <span className = "number">{formatted_date}</span>
            <span className = "bg">{formatted_date}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className = "row" key = {day}>{days}</div>);
      days = [];
    }
    return rows;
  }

  return (
    <div>
      <div className = "body">{render_cells()}</div>
    </div>
  );
}

export default Cells

