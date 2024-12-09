import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="container-fluid">
        <div className="row">
          <div className="bg-dark text-white p-2 text-center">
            <span className="navbar-brand ml-2">RESERVATION SYSTEM</span>
          </div>
        </div>
        <div className="row text-white">
          <div className="col-3 p-2">
            <div className="d-grid gap-2">
              <button type="button" className="btn btn-outline-primary">
                Home
              </button>
              {conservationAreas.map((area) => (
                <button
                  key={area}
                  type="button"
                  className={`btn btn-outline-primary ${selectedArea === area ? 'active' : ''}`}
                  onClick={() => this.setState({ selectedArea: area })}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
          <div className="col-9 p-2 text-dark">
            <form onSubmit={this.handleSubmit} className="reservation-form">
              <div>
                <label>
                  <h4>Select Time Slot:</h4>
                  <ul className="time-slot-list">
                    {timeSlots.map((slot) => (
                      <li key={slot}>
                        <input
                          type="radio"
                          name="timeSlot"
                          value={slot}
                          checked={selectedTimeSlot === slot}
                          onChange={this.handleTimeSlotChange}
                        />
                        {slot}
                      </li>
                    ))}
                  </ul>
                </label>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Reserve</button>
            </form>
            <hr />
            <h4>Reservations:</h4>
            <ul className="list-group">
              {reservations.map((reservation, index) => (
                <li key={index} className="list-group-item">
                  {reservation.area} - {reservation.timeSlot}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}