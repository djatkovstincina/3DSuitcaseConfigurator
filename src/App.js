import React, { useState, useRef } from "react";
import "./assets/styles/style.scss";
import ThreeDConfigurator from "./components/ThreeDConfigurator";
import AnimationsButton from "./components/AnimationsButton";
import ConfiguratorButton from "./components/ConfiguratorButton";
import PartCTAs from "./components/PartCTAs";

function App() {
  const [activeTab, setActiveTab] = useState("configurator");
  const [activePart, setActivePart] = useState(null);
  const threeDConfiguratorRef = useRef();  

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

  return (
    <>
      <ThreeDConfigurator ref={threeDConfiguratorRef} />
      <div className="o-tabs">
        <ConfiguratorButton 
          onClick={handleConfigurationClick} 
          className={ activeTab === "configurator" ? 'active' : '' }
        />
        <AnimationsButton 
          onClick={handleAnimationClick}
          className={ activeTab === "animation" ? 'active' : '' }
        />
      </div>
      {activeTab === "configurator" && (
        <>
          <PartCTAs activePart={activePart} setActivePart={setActivePart} />
        </>
      )}
    </>
  );
}

export default App;
