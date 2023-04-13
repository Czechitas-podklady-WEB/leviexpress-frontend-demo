import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../index';
import { SeatRow } from '../SeatRow';
import './style.css';

export const SeatPicker = ({ seats, journeyId }) => {
  const navigate = useNavigate();
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
  
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
        navigate(`/reservation/${json.data.reservationId}`);
      });
  };

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, i) => (
          <SeatRow 
            key={i} 
            row={row} 
            selectedSeatNumber={selectedSeatNumber} 
            onSelectSeat={setSelectedSeatNumber} 
          />
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
