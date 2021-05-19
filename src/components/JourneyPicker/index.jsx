import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '../..';
import './style.css';

const CityOptions = ({ cities }) => (
  <>
    <option>Vyberte</option>
    {cities.map((city) => (
      <option key={city.code} value={city.code}>
        {city.name}
      </option>
    ))}
  </>
);

const DatesOptions = ({ dates }) => (
  <>
    <option>Vyberte</option>
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
          <select>
            <CityOptions cities={cities} />
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select>
            <CityOptions cities={cities} />
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select>
            <DatesOptions dates={dates} />
          </select>
        </label>
        <button type="submit">Vyhledat spoj</button>
      </form>
    </div>
  );
};
