
import React, { Component } from "react";

export default class Events extends Component {

  render () {
    return (
      <div>
        <div className = "event" style = {{backgroundColor: 'grey'}} >
          <span className = "event text">Hilo5SOMTHING GOING GOOD</span>
        </div>
        <div className = "event" style = {{backgroundColor: 'grey'}} >
          <span className = "event text">Hilo2</span>
        </div>
        <div className = "event" style = {{backgroundColor: 'grey'}} >
          <span className = "event text">Hilo3</span>
        </div>
      </div>
    );
  }
}
