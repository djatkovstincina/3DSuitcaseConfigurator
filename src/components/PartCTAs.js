import React from 'react';

const PartCTAs = ({ onSelectPart }) => {
  return (
    <div>
      <button onClick={() => onSelectPart('body')}>Body</button>
      <button onClick={() => onSelectPart('handles')}>Handles</button>
      <button onClick={() => onSelectPart('corners')}>Corners</button>
      <button onClick={() => onSelectPart('wheels')}>Wheels</button>
    </div>
  );
};

export default PartCTAs;
