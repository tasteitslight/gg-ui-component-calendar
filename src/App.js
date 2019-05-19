import React, { Component } from "react";

import "./App.scss";
import Section from "./containers/Section/Section";
import DatePicker from "./containers/DatePicker/DatePicker";
import Backdrop from "./components/Backdrop/Backdrop";
import Calendar from "./components/Calendar/Calendar";
import Input from "./components/Input/Input";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faChevronLeft)

class App extends Component {
  state = {
    datePickerOpen: false
  }

  showDatePicker = () => {
    this.setState({datePickerOpen: true});
  }

  closeDatePicker = () => {
    this.setState({datePickerOpen: false});
  }    

  render () {
    return (
      <div className="App">
        <Section theme="section--light">
          <h1 className="section__h1">GumDrop Calendar</h1>
          <hr className="section__hr" />
          <h4 className="section__h4">Static Calendar, Light</h4>
          <div className="section__div--flex">
            <Calendar body="calendar--light" head="calendar__header--light"/>
            <Calendar body="calendar--light" head="calendar__header--light--primary--solid"/>
            <Calendar body="calendar--light" head="calendar__header--light--secondary--solid"/>
            <Calendar body="calendar--light" head="calendar__header--light--border"/>
            <Calendar body="calendar--light" head="calendar__header--light--primary--border"/>
            <Calendar body="calendar--light" head="calendar__header--light--secondary--border"/>
          </div>
        </Section>
        <Section theme="section--dark">
          <hr className="section__hr" />
          <h4 className="section__h4">Static Calendar, Dark</h4>
          <div className="section__div--flex">
            <Calendar body="calendar--dark" />
            <Calendar body="calendar--dark" head="calendar__header--dark--primary--solid"/>
            <Calendar body="calendar--dark" head="calendar__header--dark--secondary--solid"/>
          </div>
        </Section>
        <Section theme="section--light">
          <hr className="section__hr" />
          <h4 className="section__h4">Datepicker Calendar, Light</h4>
          <div className="section__div--flex section__div--relative">
            <Input className=""/>
            <button className="button" onClick={this.showDatePicker}>Open</button>
            <DatePicker theme="container--light" show={this.state.datePickerOpen} closed={this.closeDatePicker}/>
            <Backdrop show={this.state.datePickerOpen} closed={this.closeDatePicker}/>
          </div>
          <br/>
          <hr className="section__hr" />
          <h4 className="section__h4">Calendar, Variable Size</h4>
          <div className="section__div--flex">
            <Calendar body="calendar--light" size="calendar--large"/>
            <Calendar body="calendar--light" size="calendar--medium"/>
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
