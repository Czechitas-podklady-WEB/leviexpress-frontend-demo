import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { SeatPicker } from '../SeatPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey && <SeatPicker seats={journey.seats} journeyId={journey.id} />}
    </>
  );
};
