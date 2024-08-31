import Head from 'next/head';
import React, { useState } from 'react';

import AddHistoryForm from '../components/AddHistoryForm';
import Calendar from '../components/Calendar';
import LastDrinkForm from '../components/LastDrinkForm';
import ShareButton from '../components/ShareButton';

const Home: React.FC = () => {
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
    console.log('Share functionality to be implemented');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Alcohol Calendar</title>
        <meta name="description" content="Track your alcohol consumption" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
          Alcohol Calendar
        </h1>

        {!lastDrinkDate ? (
          <LastDrinkForm onSubmit={handleLastDrinkSubmit} />
        ) : (
          <div className="space-y-6">
            <Calendar
              lastDrinkDate={lastDrinkDate}
              drinkHistory={drinkHistory}
            />
            <AddHistoryForm onSubmit={handleAddHistory} />
            <ShareButton onClick={handleShare} />
          </div>
        )}
      </main>

      <footer className="py-4 text-center text-gray-500">
        © 2024 Alcohol Calendar. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
