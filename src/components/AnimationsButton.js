import React from 'react';
import classNames from 'classnames';

const AnimationsButton = ({ onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('c-configBtn', className)}
      aria-label="Animations"
    >
      Animations
    </button>
  );
};

export default AnimationsButton;
