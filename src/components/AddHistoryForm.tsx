import React, { useState } from 'react';

interface AddHistoryFormProps {
  onSubmit: (date: Date) => void;
}

const AddHistoryForm: React.FC<AddHistoryFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      onSubmit(new Date(date));
      setDate(''); // Reset the form after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3 className="mb-2 text-lg font-semibold">Add Alcohol History</h3>
      <div className="flex items-center">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mr-2 rounded border px-2 py-1"
          required
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddHistoryForm;
