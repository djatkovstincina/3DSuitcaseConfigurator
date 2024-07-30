import React from 'react';

const AnimationCTAs = ({ onTriggerAnimation }) => {
  return (
    <div>
      <button onClick={() => onTriggerAnimation('open')}>Open</button>
      <button onClick={() => onTriggerAnimation('close')}>Close</button>
      <button onClick={() => onTriggerAnimation('extend_handle')}>Extend Handle</button>
      <button onClick={() => onTriggerAnimation('retract_handle')}>Retract Handle</button>
      <button onClick={() => onTriggerAnimation('wheel_spinner_on')}>Wheel Spinner On</button>
      <button onClick={() => onTriggerAnimation('wheel_spinner_off')}>Wheel Spinner Off</button>
    </div>
  );
};

export default AnimationCTAs;
