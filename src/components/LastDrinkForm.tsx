import React, { useState } from 'react';

interface LastDrinkFormProps {
  onSubmit: (date: Date) => void;
}

const LastDrinkForm: React.FC<LastDrinkFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(new Date(date));
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">When did you last drink?</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 w-full rounded border p-2"
        required
      />
      <button
        type="submit"
        className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default LastDrinkForm;
