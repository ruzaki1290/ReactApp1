import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const conservationAreas = ['Area 1', 'Area 2', 'Area 3', 'Area 4'];
const timeSlots = [
  '9:00am - 12:00pm',
  '12:00pm - 3:00pm',
  '3:00pm - 6:00pm'
];

export default class App extends Component {
  state = {
    selectedArea: '',
    selectedTimeSlot: '',
    reservations: []
  };

  handleAreaChange = (event) => {
    this.setState({ selectedArea: event.target.value });
  };

  handleTimeSlotChange = (event) => {
    this.setState({ selectedTimeSlot: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { selectedArea, selectedTimeSlot, reservations } = this.state;
    if (selectedArea && selectedTimeSlot) {
      this.setState({
        reservations: [...reservations, { area: selectedArea, timeSlot: selectedTimeSlot }],
        selectedArea: '',
        selectedTimeSlot: ''
      });
    }
  };

  render() {
    const { selectedArea, selectedTimeSlot, reservations } = this.state;

    return (
      <div className="App">
        <h4 className="bg-primary text-white text-center p-2">
          Reservation System
        </h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Select Conservation Area:
              <select value={selectedArea} onChange={this.handleAreaChange}>
                <option value="">Select an area</option>
                {conservationAreas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              Select Time Slot:
              <select value={selectedTimeSlot} onChange={this.handleTimeSlotChange}>
                <option value="">Select a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </label>
          </div>
          <button type="submit">Reserve</button>
        </form>
        <h5>Reservations:</h5>
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>{reservation.area} - {reservation.timeSlot}</li>
          ))}
        </ul>
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
