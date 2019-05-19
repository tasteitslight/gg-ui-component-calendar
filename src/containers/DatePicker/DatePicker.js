import React from "react";

import Calendar from '../../components/Calendar/Calendar';

import "./DatePicker.scss";

const container = props => {
  
  const classes = [
    "datepicker",
    props.theme,
    props.show ? "DatePickerOpen" : "DatePickerClosed"
  ];

  return (
    <div className={classes.join(' ')}>
      <Calendar body="calendar--light"/>
    </div>
  );
};

export default container;