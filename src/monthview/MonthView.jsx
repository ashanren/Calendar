
import React, { Component } from "react";
import { addMonths, subMonths } from "date-fns";
import Header from "./Header";
import Days   from "./Days";
import Cells  from "./Cells";

export default class MonthView extends Component {
  constructor (state) {
    super(state);
    this.state = {
      week_start    : 1,
      date_format   : "MMMM yyyy",
      current_month : new Date(),
      selected_date : new Date(),
    };
  }
  next_month = () => {
    this.setState({current_month: addMonths(this.state.current_month, 1)});
  }

  prev_month = () => {
    this.setState({current_month: subMonths(this.state.current_month, 1)});
  }

  render () {
    return (
      <div>
        <Header 
          date_format   = {this.state.date_format}
          next_month    = {this.next_month} 
          prev_month    = {this.prev_month}
          current_month = {this.state.current_month} 
        />
        <Days 
          week_start    = {this.state.week_start}
          current_month = {this.state.current_month} 
        />
        <Cells
          week_starts_on  = {this.state.week_start}
          current_month   = {this.state.current_month} 
          selected_date   = {this.state.selected_date} 
        />
      </div>
    );
  }
}

