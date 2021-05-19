import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Seat } from '../Seat';

export const SeatPicker = ({ seats }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const history = useHistory();
  const handleBuy = () => {
    // @TODO: post choice
    history.push(`/reservation/${'a456xc'}`);
  };

  return (
    <div>
      <h3>Vyberte sedadlo</h3>
      <div>
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
        onClick={handleBuy}
        type="button"
        disabled={selectedSeatNumber === null}
      >
        Koupit
      </button>
    </div>
  );
};
