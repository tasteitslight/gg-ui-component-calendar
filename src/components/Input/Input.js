import React from 'react';

import './Input.scss';

const Input = props => {

  const classes = [
    "input",
    props.className,
    props.show ? "showDatePicker" : "closeDatePicker"
  ];

  return (
    <form>
      <input
        className={classes.join(' ')}
        placeholder="05/20/2019" 
        type="text" 
        id="date" 
        name="date" />
    </form>
    
  );
};

export default Input;