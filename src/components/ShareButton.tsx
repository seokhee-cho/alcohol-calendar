import React from 'react';

interface ShareButtonProps {
  onClick: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Share</button>;
};

export default ShareButton;
