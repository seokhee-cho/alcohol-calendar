import React, { useState } from 'react';

interface AddHistoryFormProps {
  onSubmit: (date: Date) => void;
}

const AddHistoryForm: React.FC<AddHistoryFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(new Date(date));
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Add Drinking History</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 w-full rounded border p-2"
        required
      />
      <button
        type="submit"
        className="w-full rounded bg-green-500 py-2 text-white hover:bg-green-600"
      >
        Add Date
      </button>
    </form>
  );
};

export default AddHistoryForm;
