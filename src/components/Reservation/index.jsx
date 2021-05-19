import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiBaseUrl } from '../..';
import './style.css';

const ReservationInner = ({ fromCity, toCity, date, seatNumber }) => (
  <p>
    Dne <strong>{date}</strong> jedete z <strong>{fromCity}</strong> do{' '}
    <strong>{toCity}</strong> na sedadle <strong>{seatNumber}</strong>.
  </p>
);

export const Reservation = () => {
  const { id } = useParams();

  const [reservation, setResetvation] = useState(null);
  useEffect(() => {
    const url = new URL(`${apiBaseUrl}/reservation`);
    url.searchParams.append('id', id);

    fetch(url.toString())
      .then((response) => response.json())
      .then((data) => setResetvation(data.data));
  }, []);

  return (
    <div className="reservation">
      <h2>Detail cesty {id}</h2>
      {reservation && <ReservationInner {...reservation} />}
    </div>
  );
};
