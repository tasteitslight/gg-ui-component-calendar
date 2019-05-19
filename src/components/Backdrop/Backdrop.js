import React from 'react';

import './Backdrop.scss';

const backdrop = (props) => {
    const classes = [
      'backdrop', 
      props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={classes.join(' ')} onClick={props.closed}></div>;
};

export default backdrop;