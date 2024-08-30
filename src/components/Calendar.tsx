import React from 'react';

interface CalendarProps {
  lastDrinkDate: Date;
  drinkHistory: Date[];
}

const Calendar: React.FC<CalendarProps> = ({ lastDrinkDate, drinkHistory }) => {
  return (
    <div>
      <h2>Calendar Component</h2>
      <p>Last Drink Date: {lastDrinkDate.toDateString()}</p>
      <ul>
        {drinkHistory.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
