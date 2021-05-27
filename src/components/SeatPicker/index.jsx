import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiBaseUrl } from '../..';
import { Seat } from '../Seat';
import './style.css';

export const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
  const history = useHistory();

  const handleBuy = () => {
    fetch(`${apiBaseUrl}/reserve`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        seat: selectedSeatNumber,
        journeyId,
      })
    })
      .then((response) => response.json())
      .then((json) => {
        history.push(`/reservation/${json.data.reservationId}`);
      });
  };

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, i) => (
          <div key={i}>
            {row.map((seat, k) => (
              <Seat
                key={k}
                number={seat.number}
                isOccupied={seat.isOccupied}
                isSelected={seat.number === selectedSeatNumber}
                onSelect={setSelectedSeatNumber}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        className="btn"
        onClick={handleBuy}
        type="button"
        disabled={selectedSeatNumber === null}
      >
        Rezervovat
      </button>
    </div>
  );
};
