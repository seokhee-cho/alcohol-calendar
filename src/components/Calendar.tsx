import 'react-calendar/dist/Calendar.css';

import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

type Value = Date | null | [Date | null, Date | null];

interface CalendarProps {
  lastDrinkDate: Date;
  drinkHistory: Date[];
}

const Calendar: React.FC<CalendarProps> = ({ lastDrinkDate, drinkHistory }) => {
  const [value, setValue] = useState<Date>(new Date());

  const handleDateChange = (newValue: Value) => {
    if (newValue instanceof Date) {
      setValue(newValue);
    }
  };

  const tileClassName = ({
    date,
    view,
  }: {
    date: Date;
    view: string;
  }): string | null => {
    if (view === 'month') {
      if (date.toDateString() === lastDrinkDate.toDateString()) {
        return 'last-drink-date';
      }
      if (drinkHistory.some((d) => d.toDateString() === date.toDateString())) {
        return 'drink-history-date';
      }
    }
    return null;
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Your Drinking Calendar</h2>
      <ReactCalendar
        onChange={handleDateChange}
        value={value}
        tileClassName={tileClassName}
      />
      <div className="mt-4">
        <p className="mb-2">
          Last drink:{' '}
          <span className="font-bold">{lastDrinkDate.toDateString()}</span>
        </p>
        <p className="mb-2">Drink history:</p>
        <ul className="list-disc pl-5">
          {drinkHistory.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
