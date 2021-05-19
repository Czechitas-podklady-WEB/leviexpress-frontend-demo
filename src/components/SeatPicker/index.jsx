import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiBaseUrl } from '../..';
import { Seat } from '../Seat';

export const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const history = useHistory();
  const handleBuy = () => {
    const url = new URL(`${apiBaseUrl}/reserve`);
    url.searchParams.append('seat', selectedSeatNumber);
    url.searchParams.append('journey', journeyId);

    fetch(url.toString(), {
      method: 'post',
    })
      .then((response) => response.json())
      .then((data) => {
        history.push(`/reservation/${data.data.reservationId}`);
      });
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
        Rezervovat
      </button>
    </div>
  );
};
