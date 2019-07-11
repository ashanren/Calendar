
import React from "react";
import { format, } from "date-fns";

function Header(props) {
  const {prev_month, next_month, current_month, date_format, } = props;
  return (
    <div className = "header row flex-middle">
      <div className = "col col-start">
        <div className = "icon" onClick = {prev_month}>chevron_left</div>
      </div>
      <div className = "col col-center">
        <span>{format(current_month, date_format)}</span>
      </div>
      <div className = "col col-end">
        <div className = "icon" onClick = {next_month}>chevron_right</div>
      </div>
    </div>
  );
}

export default Header;

