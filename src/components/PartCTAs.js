import React from 'react';
import { cameraMapping } from '../constants/materials';
import classNames from 'classnames';
import '../assets/styles/parts.scss';

function PartCTAs({ activePart, setActivePart }) {
  const parts = ["body", "handles", "corners", "wheels"];

  const handleCtaClick = (part) => {
    // Set the active part
    setActivePart(part);

    // Activate the camera based on the selected part
    const cameras = cameraMapping[part];
    if (cameras?.length) {
      const camera = checkDevice() === 'desktop' ? cameras[0] : cameras[1];
      window.Unlimited3D.activateModifier({ modifier: camera });
    }
  };

  const checkDevice = () => {
    return window.innerWidth > 768 ? 'desktop' : 'mobile';
  };

  return (
    <div className="o-parts">
      {parts.map((part) => (
        <button
          key={part}
          aria-label={part}
          onClick={() => handleCtaClick(part)}
          className={`c-partBtn ${ activePart === part ? 'active' : '' }`}
        >
          <span className="c-partBtn--circle"></span>
          {part}
        </button>
      ))}
    </div>
  );
}

export default PartCTAs;
