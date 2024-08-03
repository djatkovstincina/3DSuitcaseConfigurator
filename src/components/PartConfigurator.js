import React, { useState, useEffect } from 'react';
import "../assets/styles/configurator.scss";
import { ReactComponent as Close } from "../assets/svgs/close.svg";
import { ReactComponent as Arrow } from "../assets/svgs/arrow.svg";
import { ReactComponent as NoImage } from "../assets/svgs/no-image.svg";

function PartConfigurator({ activePart, setActivePart, colors, handleColorSelect, handlePrevClick, handleNextClick }) {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  useEffect(() => {
    // Reset selected material when active part changes
    setSelectedMaterial(null);
  }, [activePart]);

  const handleColorClick = (colorValue, colorName) => {
    setSelectedMaterial(colorName);
    handleColorSelect(colorValue);
  };

  return (
    <div className="c-configurator--wrap">
      {activePart && (
        <div className="c-configurator">
          <div className="c-configurator--head">
            <h1 className="c-configurator--title">{activePart}</h1>
            <button
              className="c-configurator--close"
              onClick={() => setActivePart(null)}
              aria-label="Close"
            >
              <Close className="icon" />
            </button>
          </div>
          <p className="c-configurator--select">
            <span>Select Color </span>
            <span className="c-configurator--select-name">{selectedMaterial}</span>
          </p>
          <div className="c-configurator--options">
            {colors.map((color, index) => (
              <div key={index} className="color-option">
                <img
                  onClick={() => handleColorClick(color.value, color.name)}
                  src={color.background} // Add a proper image source if available
                  alt={color.name}
                  className={`c-configurator--icon ${selectedMaterial === color.name ? 'selected' : ''}`}
                />
              </div>
            ))}
          </div>
          {activePart === 'body' && (
            <div className="c-configurator--image">
              <div>
                <p>Image </p> 
                 <NoImage />
              </div>
              <span className="c-configurator--select-name">No Image</span>
            </div>
          )}
          <div className="c-configurator--navigation">
            <button
              className="c-configurator--navigation-prev"
              aria-label="Previous"
              onClick={handlePrevClick}
            >
              <Arrow />
            </button>
            <button
              className="c-configurator--navigation-next"
              aria-label="Next"
              onClick={handleNextClick}
            >
              <span>Next</span>
              <Arrow />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PartConfigurator;
