import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

const EditTick = function EditTick({ onClose, tick }) {
  const inputs = {
    date: tick.tick_date,
    notes: tick.tick_notes,
    style: tick.style,
    lead_style: tick.lead_style
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
      <div className="form-section">
        <div className="form-section-header">
          Style
        </div>
      </div>
      <div className="form-section">
        <div className="form-section-header">
          Date
        </div>
      </div>
      <div className="form-section">
        <div className="form-section-header">
          Notes
        </div>
        <textarea
          name="notes"
          value={inputs.notes}
          onChange={handleInput}
        />
      </div>
      <button
        type="button"
      >
        Save Tick
      </button>
    </form>
  );
};

export default EditTick;
