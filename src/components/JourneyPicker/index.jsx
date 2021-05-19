import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '../..';
import './style.css';

const CityOptions = ({ cities }) => (
  <>
    <option value="">Vyberte</option>
    {cities.map((city) => (
      <option key={city.code} value={city.code}>
        {city.name}
      </option>
    ))}
  </>
);

const DatesOptions = ({ dates }) => (
  <>
    <option value="">Vyberte</option>
    {dates.map((date) => (
      <option key={date}>{date}</option>
    ))}
  </>
);

export const JourneyPicker = ({ onJourneyChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onJourneyChange('@TODO');
  };

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');

  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch(`${apiBaseUrl}/cities`)
      .then((response) => response.json())
      .then((data) => setCities(data.data));
  }, []);

  const [dates, setDates] = useState([]);
  useEffect(() => {
    fetch(`${apiBaseUrl}/dates`)
      .then((response) => response.json())
      .then((data) => setDates(data.data));
  }, []);

  return (
    <div className="journey-picker">
      <div className="journey-picker__head">Kam chcete jet?</div>
      <form onSubmit={handleSubmit}>
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select
            value={fromCity}
            onChange={(event) => setFromCity(event.target.value)}
          >
            <CityOptions cities={cities} />
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select
            value={toCity}
            onChange={(event) => setToCity(event.target.value)}
          >
            <CityOptions cities={cities} />
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select
            value={date}
            onChange={(event) => setDate(event.target.value)}
          >
            <DatesOptions dates={dates} />
          </select>
        </label>
        <button type="submit" disabled={!fromCity || !toCity || !date}>
          Vyhledat spoj
        </button>
      </form>
    </div>
  );
};
