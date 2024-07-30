import "./assets/styles/style.scss"
import ThreeDConfigurator from "./components/ThreeDConfigurator";
import AnimationCTAs from "./components/AnimationCTAs";
import AnimationsButton from "./components/AnimationsButton";
import ConfiguratorButton from "./components/ConfiguratorButton";
import PartCTAs from "./components/PartCTAs";
import { changeMaterial, triggerAnimation } from "./utils/materialUtils";

function App() {
  return (
    <>
      <ThreeDConfigurator />
      <AnimationCTAs />
      <AnimationsButton />
      <ConfiguratorButton />
      <PartCTAs />
    </>
  );
}

export default App;
