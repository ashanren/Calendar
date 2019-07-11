
import React from "react";

function Events(props) {
  const { title, color } = props;
  return (
    <div>
      <div className = "event" style = {{backgroundColor: (color || 'grey')}} >
        <span className = "event text">{title}</span>
      </div>
    </div>
  );
}

export default Events

