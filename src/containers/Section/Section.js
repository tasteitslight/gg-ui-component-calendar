import React from 'react';

import './Section.scss';

const section = ( props ) => {
  const classes = [
    "section",
    props.theme,
    props.mod
  ];
  return (
    <div className={classes.join(' ')}>
      {props.children}
    </div>
  );
};
   
export default section;

//className={[classes.Section, classes[props.template]].join(' ')}