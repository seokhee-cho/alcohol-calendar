import React from 'react';

interface ShareButtonProps {
  onClick: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded bg-purple-500 py-2 text-white hover:bg-purple-600"
    >
      Share My Calendar
    </button>
  );
};

export default ShareButton;
