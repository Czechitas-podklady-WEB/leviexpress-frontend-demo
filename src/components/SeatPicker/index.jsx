import React from 'react';
import { Link } from 'react-router-dom';
import { Seat } from '../Seat';

export const SeatPicker = ({ seats }) => {
  return (
    <div>
      <h3>Vyberte sedadlo</h3>
      <Seat number="15" />
      <ul>
        {seats.map((isOccupied, i) => (
          <li key={i}>
            Sedadlo ({i + 1}): {isOccupied ? 'obsazeno' : 'volné'}
          </li>
        ))}
      </ul>
      <Link to={`/reservation/${'a456xc'}`}>Přejít na detail rezervace</Link>
    </div>
  );
};
