import React from 'react';
import classNames from 'classnames';

function PartCTAs({ activePart, setActivePart }) {
  const parts = ["body", "handles", "corners", "wheels"];

  return (
    <div className="o-parts">
      {parts.map((part, index) => (
        <button
          key={index}
          onClick={() => setActivePart(part)}
          className={classNames('c-partBtn', (activePart === part ? "active" : ""))}
        >
          <span className="c-partBtn--circle"></span>
          {part}
        </button>
      ))}
    </div>
  );
}

export default PartCTAs;
