import React, { useState } from 'react';
import { useParams } from 'react-router';

export const JourneyDetail = () => {
  const { id } = useParams();

  const [stops] = useState(() => [
    {
      name: 'Praha',
      time: '00:05',
    },
    {
      name: 'Říčany',
      time: '00:37',
    },
    {
      name: 'Brno',
      time: '02:00',
    },
  ]);
  const [seat] = React.useState(32);

  return (
    <div>
      <h2>Detail cesty {id}</h2>
      <p>
        Sedíte na sedadle číslo <strong>{seat + 1}</strong>.
      </p>
      <ul>
        {stops.map((stop, i) => (
          <li key={i}>
            {stop.name} ({stop.time})
          </li>
        ))}
      </ul>
    </div>
  );
};
