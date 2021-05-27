import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiBaseUrl } from '../..';
import './style.css';

const ReservationInfo = ({ fromCity, toCity, date, seatNumber }) => (
  <div className="reservation__body">
    <div className="reservation__body__headings">
      <p>Datum cesty:</p>
      <p>Odjezd:</p>
      <p>Příjezd:</p>
      <p>Sedadlo:</p>
    </div>
    <div className="reservation__body__data">
      <p>
        <strong>{date}</strong>
      </p>
      <p>
        <strong>{fromCity.name}, {fromCity.time}</strong>
      </p>
      <p>
        <strong>{toCity.name}, {toCity.time}</strong>
      </p>
      <p>
        <strong>{seatNumber}</strong>
      </p>
    </div>
  </div>
);

export const Reservation = () => {
  const [reservation, setResetvation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const url = new URL(`${apiBaseUrl}/reservation`);
    url.searchParams.append('id', id);

    fetch(url.toString())
      .then((response) => response.json())
      .then((data) => setResetvation(data.data));
  }, []);

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {id}</h2>
      {
        reservation === null ? 
        null : (
          <ReservationInfo 
            fromCity={reservation.fromCity}
            toCity={reservation.toCity}
            date={reservation.date}
            seatNumber={reservation.seatNumber} 
          />
        )
      }
    </div>
  );
};
