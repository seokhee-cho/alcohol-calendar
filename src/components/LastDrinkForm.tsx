import React, { useState } from 'react';

interface LastDrinkFormProps {
  onSubmit: (date: Date) => void;
}

const LastDrinkForm: React.FC<LastDrinkFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState<Date>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LastDrinkForm;
