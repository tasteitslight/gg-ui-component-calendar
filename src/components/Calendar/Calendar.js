import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Calendar.scss';


const Calendar = ( props ) => {

  const calClasses = [
    "calendar",
    props.body,
    props.size
  ];

  const headClasses = [
    "calendar__header",
    props.head,
  ];

  const chevronClasses = [
    "calendar__chevrons",
    props.chev,
  ];

  return (
    <div className={calClasses.join(' ')}>
      <div className={headClasses.join(' ')}>
        <FontAwesomeIcon className={chevronClasses.join(' ')} icon="chevron-left" />
        <div className="calendar__month">May</div>
        <div className="calendar__year">2019</div>
        <FontAwesomeIcon className={chevronClasses.join(' ')} icon="chevron-right" />
      </div>
      <div className="calendar__date">
        <div className="calendar__day">S</div>
        <div className="calendar__day">M</div>
        <div className="calendar__day">T</div>
        <div className="calendar__day">W</div>
        <div className="calendar__day">T</div>
        <div className="calendar__day">F</div>
        <div className="calendar__day">S</div>
        <div className="calendar__number"></div>
        <div className="calendar__number"></div>
        <div className="calendar__number"></div>
        <div className="calendar__number">1</div>
        <div className="calendar__number">2</div>
        <div className="calendar__number">3</div>
        <div className="calendar__number">4</div>
        <div className="calendar__number">5</div>
        <div className="calendar__number">6</div>
        <div className="calendar__number">7</div>
        <div className="calendar__number">8</div>
        <div className="calendar__number">9</div>
        <div className="calendar__number">10</div>
        <div className="calendar__number">11</div>
        <div className="calendar__number">12</div>
        <div className="calendar__number">13</div>
        <div className="calendar__number">14</div>
        <div className="calendar__number">15</div>
        <div className="calendar__number">16</div>
        <div className="calendar__number">17</div>
        <div className="calendar__number">18</div>
        <div className="calendar__number">19</div>
        <div className="calendar__number calendar__number--current">20</div>
        <div className="calendar__number">21</div>
        <div className="calendar__number">22</div>
        <div className="calendar__number">23</div>
        <div className="calendar__number">24</div>
        <div className="calendar__number">25</div>
        <div className="calendar__number">26</div>
        <div className="calendar__number">27</div>
        <div className="calendar__number">28</div>
        <div className="calendar__number">29</div>
        <div className="calendar__number">30</div>
      </div>
    </div>
  );
};

export default Calendar;

