import React, { useState } from 'react';

import AddHistoryForm from '../components/AddHistoryForm';
import Calendar from '../components/Calendar';
import LastDrinkForm from '../components/LastDrinkForm';
import ShareButton from '../components/ShareButton';
import { Base } from '../templates/Base';

const Index = () => {
  const [lastDrinkDate, setLastDrinkDate] = useState<Date | null>(null);
  const [drinkHistory, setDrinkHistory] = useState<Date[]>([]);

  const handleLastDrinkSubmit = (date: Date) => {
    setLastDrinkDate(date);
    setDrinkHistory([...drinkHistory, date]);
  };

  const handleAddHistory = (date: Date) => {
    setDrinkHistory([...drinkHistory, date]);
  };

  const handleShare = () => {
    // Implement sharing functionality
    console.log('Share button clicked');
  };

  return (
    <Base>
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-3xl font-bold">Alcohol Calendar</h1>

        {!lastDrinkDate && <LastDrinkForm onSubmit={handleLastDrinkSubmit} />}

        {lastDrinkDate && (
          <>
            <Calendar
              lastDrinkDate={lastDrinkDate}
              drinkHistory={drinkHistory}
            />

            <div className="mt-4">
              <AddHistoryForm onSubmit={handleAddHistory} />
              <ShareButton onClick={handleShare} />
            </div>
          </>
        )}
      </div>
    </Base>
  );
};

export default Index;
