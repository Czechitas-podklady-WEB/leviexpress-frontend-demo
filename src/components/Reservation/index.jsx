import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiBaseUrl } from '../..';
import './style.css';

const ReservationInner = ({ fromCity, toCity, date, seatNumber }) => (
  <div className="reservation__body">
    <div className="reservation__body__headings">
      <p>Datum cesty:</p>
      <p>Z:</p>
      <p>Do:</p>
      <p>Sedadlo:</p>
    </div>
    <div className="reservation__body__data">
      <p>
        <strong>{date}</strong>
      </p>
      <p>
        <strong>{fromCity}</strong>
      </p>
      <p>
        <strong>{toCity}</strong>
      </p>
      <p>
        <strong>{seatNumber}</strong>
      </p>
    </div>
  </div>
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
      <h2>Vaše e-jízdenka</h2>
      {reservation && <ReservationInner {...reservation} />}
    </div>
  );
};
