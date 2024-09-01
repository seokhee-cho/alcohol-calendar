import React, { useEffect, useState } from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    className={`rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 ${props.className}`}
  >
    {children}
  </button>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => <input {...props} className={`rounded border p-2 ${props.className}`} />;

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        {children}
        <Button onClick={onClose} className="mt-4">
          Close
        </Button>
      </div>
    </div>
  );
};

const CustomCalendar: React.FC<{
  onDateClick: (date: Date) => void;
  markedDates: Date[];
}> = ({ onDateClick, markedDates }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }

    setCalendarDays(days);
  }, [currentDate]);

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={prevMonth}>&lt;</button>
        <h2>
          {currentDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <button
            key={index}
            onClick={() => onDateClick(day)}
            className={`rounded-full p-2 text-center
              ${markedDates.some((d) => d.toDateString() === day.toDateString()) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}
            `}
          >
            {day.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [lastDrinkDate, setLastDrinkDate] = useState<Date | null>(null);
  const [drinkHistory, setDrinkHistory] = useState<
    Array<{ date: Date; details: string }>
  >([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [drinkDetails, setDrinkDetails] = useState('');

  console.log(lastDrinkDate);

  const handleLastDrinkSubmit = (date: Date) => {
    setLastDrinkDate(date);
    setDrinkHistory([...drinkHistory, { date, details: 'Last drink' }]);
    setShowCalendar(true);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowDetailsModal(true);
  };

  const handleAddDrinkDetails = () => {
    if (selectedDate) {
      setDrinkHistory([
        ...drinkHistory,
        { date: selectedDate, details: drinkDetails },
      ]);
      setShowDetailsModal(false);
      setDrinkDetails('');
    }
  };

  const handleShare = () => {
    alert('Sharing functionality to be implemented');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
        <div className="p-8">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">
            Alcohol Calendar
          </h1>

          {!showCalendar ? (
            <div>
              <p className="mb-4">When did you last drink?</p>
              <Input
                type="date"
                onChange={(e) =>
                  handleLastDrinkSubmit(new Date(e.target.value))
                }
                className="mb-4 w-full"
              />
              <Button onClick={() => setShowCalendar(true)} className="w-full">
                Already have a calendar?
              </Button>
            </div>
          ) : (
            <div>
              <CustomCalendar
                onDateClick={handleDateClick}
                markedDates={drinkHistory.map((dh) => dh.date)}
              />
              <Button onClick={handleShare} className="mt-4 w-full">
                Share
              </Button>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
      >
        <h2 className="mb-4 text-xl font-bold">Add Drink Details</h2>
        <Input
          value={drinkDetails}
          onChange={(e) => setDrinkDetails(e.target.value)}
          placeholder="What did you drink? Who were you with?"
          className="mb-4 w-full"
        />
        <Button onClick={handleAddDrinkDetails} className="w-full">
          Add Details
        </Button>
      </Modal>
    </div>
  );
};

export default Home;
