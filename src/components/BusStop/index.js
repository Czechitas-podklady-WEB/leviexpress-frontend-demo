import React from 'react';

export const BusStop = ({ city, station, departure }) => (
  <div>
    <span>{city}</span>:<span>{station}</span>:<span>{departure}</span>
  </div>
);