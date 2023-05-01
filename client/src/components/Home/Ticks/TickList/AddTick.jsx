import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FormHeader,
  RadioOptions,
  SubRadioOptions,
  FormContents,
  NotesDateContainer,
  TextArea
} from '../../../styles/styles.js';

const AddTick = function AddTick({ onClose, tick }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const inputs = {
    // date: tick.tick_date,
    // notes: tick.tick_notes,
    // style: tick.style,
    // lead_style: tick.lead_style
  };

  const handleInput = () => {

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`'/rr/ticks/${tick.tick_id}/update'`, inputs)
      .then((results) => {
        console.info(results.status);
        onClose(event);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="edit-tick-form" onSubmit={handleSubmit}>
      <FormHeader>Edit Tick</FormHeader>
      <FormContents>
        <div className="form-section">
          <div className="form-section-header">Style</div>
          <RadioOptions>
            <label htmlFor="solo">
              <input
                name="style"
                type="radio"
                value={tick.style}
                onChange={handleInput}
                required
              />
              Solo
            </label>
            <label htmlFor="TR">
              <input
                name="style"
                type="radio"
                value={tick.style}
                onChange={handleInput}
                required
              />
              TR
            </label>
            <label htmlFor="Follow">
              <input
                name="style"
                type="radio"
                value={tick.style}
                onChange={handleInput}
                required
              />
              Follow
            </label>
            <label htmlFor="Lead">
              <input
                name="style"
                type="radio"
                value={tick.style}
                onChange={handleInput}
                required
              />
              Lead
            </label>
            <SubRadioOptions>
              <label htmlFor="Onsight">
                <input
                  name="style"
                  type="radio"
                  value={tick.style}
                  onChange={handleInput}
                  required
                />
                Onsight
              </label>
              <label htmlFor="Flash">
                <input
                  name="style"
                  type="radio"
                  value={tick.style}
                  onChange={handleInput}
                  required
                />
                Flash
              </label>
              <label htmlFor="Redpoint">
                <input
                  name="style"
                  type="radio"
                  value={tick.style}
                  onChange={handleInput}
                  required
                />
                Redpoint
              </label>
              <label htmlFor="Pinkpoint">
                <input
                  name="style"
                  type="radio"
                  value={tick.style}
                  onChange={handleInput}
                  required
                />
                Pinkpoint
              </label>
              <label htmlFor="Fell/Hung">
                <input
                  name="style"
                  type="radio"
                  value={tick.style}
                  onChange={handleInput}
                  required
                />
                Fell / Hung
              </label>
            </SubRadioOptions>
          </RadioOptions>
        </div>
        <NotesDateContainer>
          <div className="form-section">
            <div className="form-section-header">
              Date
            </div>
            <div className="calendar-icon">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="P"
              />
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-header">
              Notes
            </div>
            <TextArea
              name="notes"
              value={inputs.notes}
              onChange={handleInput}
            />
          </div>
        </NotesDateContainer>
      </FormContents>

      <button type="button">Save Tick</button>
    </form>
  );
};

export default AddTick;
