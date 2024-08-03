import React, { useState, useRef, useEffect } from "react";
import "./assets/styles/style.scss";
import ThreeDConfigurator from "./components/ThreeDConfigurator";
import AnimationsButton from "./components/AnimationsButton";
import ConfiguratorButton from "./components/ConfiguratorButton";
import PartCTAs from "./components/PartCTAs";
import PartConfigurator from "./components/PartConfigurator";
import { colorsMapping, partsMapping, cameraMapping } from './constants/materials'

function App() {
  const [activeTab, setActiveTab] = useState("configurator");
  const [activePart, setActivePart] = useState(null);
  const threeDConfiguratorRef = useRef();

  const parts = Object.keys(colorsMapping);
  const currentIndex = parts.indexOf(activePart);

  const handlePrevClick = () => {
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + parts.length) % parts.length;
      setActivePart(parts[prevIndex]);
      // Activate the camera based on the selected part
      const cameras = cameraMapping[parts[prevIndex]];
      if (cameras && cameras.length > 0) {
        const camera = checkDevice() === 'desktop' ? cameras[0] : cameras[1];
        window.Unlimited3D.activateModifier({ modifier: camera });
      }
    }
  };

  const handleNextClick = () => {
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % parts.length;
      setActivePart(parts[nextIndex]);
      const cameras = cameraMapping[parts[nextIndex]];
      if (cameras && cameras.length > 0) {
        const camera = checkDevice() === 'desktop' ? cameras[0] : cameras[1];
        window.Unlimited3D.activateModifier({ modifier: camera });
      }
    }
  };

  const changeColor = (color) => {
    if (activePart) {
      if (window.Unlimited3D && typeof window.Unlimited3D.changeMaterials === 'function') {
        const parts = partsMapping[activePart];

        const result = window.Unlimited3D.changeMaterials({
          partObjects: parts.map(part => ({
            parts: [part],
            material: color
          }))
        });
      } else {
        console.error('changeMaterials method is not available on Unlimited3D.');
      }
    }
  };

  const handleConfigurationClick = () => {
    setActiveTab("configurator");
    if (threeDConfiguratorRef.current) {
      threeDConfiguratorRef.current.hideAnnotations();
    }
  };

  const handleAnimationClick = () => {
    setActiveTab("animation");
    if (threeDConfiguratorRef.current) {
      threeDConfiguratorRef.current.showAnnotations();
    }
  };

  const checkDevice = () => {
    return window.innerWidth > 768 ? 'desktop' : 'mobile';
  };

  return (
    <>
      <ThreeDConfigurator ref={threeDConfiguratorRef} />
      <div className="o-tabs">
        <ConfiguratorButton
          onClick={handleConfigurationClick}
          className={activeTab === "configurator" ? 'active' : ''}
        />
        <AnimationsButton
          onClick={handleAnimationClick}
          className={activeTab === "animation" ? 'active' : ''}
        />
      </div>
      {activeTab === "configurator" && (
        <>
          <PartCTAs activePart={activePart} setActivePart={setActivePart} />
          <PartConfigurator
            activePart={activePart}
            setActivePart={setActivePart}
            colors={colorsMapping[activePart]}
            handleColorSelect={changeColor}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </>
      )}
    </>
  );
}

export default App;
