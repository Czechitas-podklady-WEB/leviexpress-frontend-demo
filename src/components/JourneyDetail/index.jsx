import React from 'react';
import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => (
  <div className="journey-detail container">
    <h2>Podrobnosti cesty</h2>
    {
      journey.stops.map((stop) => (
        <BusStop city={stop.name} station={stop.station} departure={stop.time} />
      ))
    }
  </div>
);