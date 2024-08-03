import React, { useEffect, forwardRef, useImperativeHandle } from 'react';

const ThreeDConfigurator = forwardRef((props, ref) => {
  useEffect(() => {
    if (!window.Unlimited3D) {
      console.error('Unlimited3D is not loaded.');
      return;
    }

    const options = {
      distID: 'latest',
      solution3DName: 'suitcase-color',
      projectName: 'resources-for-videos-and-marketing-purposes',
      solution3DID: '62766',
      containerID: 'container3d',
      onPointerClick: handlePointerClick,
    };

    const config = {
      camera: checkDevice() === 'desktop' ? 'Camera Desktop' : 'Camera Mobile'
    };

    window.Unlimited3D.init(options, config);

    const hideAnnotations = () => {
      if (window.Unlimited3D?.hideAnnotations) {
        window.Unlimited3D.hideAnnotations({
          annotations: ["Open", "Close", "Extend handle", "Retract handle", "Wheel spinner on", "Wheel spinner off"]
        });
      } else {
        console.error('Unlimited3D.hideAnnotations is not available.');
      }
    };

    // Delay for initialization
    const timeoutId = setTimeout(hideAnnotations, 1000);

    // Cleanup on component unmount
    return () => clearTimeout(timeoutId);

  }, []);

  const handlePointerClick = (objectsClick) => {
    if (objectsClick.length > 0 && objectsClick[0].type === 'annotation') {
      const annotationName = objectsClick[0].name;
      const annotationActions = {
        'Open': () => {
          window.Unlimited3D.showAnnotations({ annotationObjects: [{ annotations: ["Close"] }] });
          window.Unlimited3D.hideAnnotations({ annotations: ["Open", "Extend handle", "Wheel spinner on"] });
          window.Unlimited3D.activateModifier({ modifier: 'open' });
          Unlimited3D.getAvailableAnnotations((error, result) => { console.log(result); });
        },
        'Close': () => {
          window.Unlimited3D.activateTransition({ transition: 'Suitcase Close' });
          window.Unlimited3D.resetCameraPosition({ name: 'Camera Desktop' });
          window.Unlimited3D.activateModifier({ modifier: 'close' });
        },
        'Extend handle': () => {
          window.Unlimited3D.showAnnotations({ annotationObjects: [{ annotations: ["Retract handle"] }] });
          window.Unlimited3D.hideAnnotations({ annotations: ["Open", "Extend handle", "Wheel spinner on"] });
          window.Unlimited3D.activateModifier({ modifier: 'extend_handle' });
        },
        'Retract handle': () => {
          window.Unlimited3D.activateAnimationState({ animationSet: 'default_camera_desktop' });
          window.Unlimited3D.resetCameraPosition({ name: 'Camera Desktop' });
          window.Unlimited3D.activateModifier({ modifier: 'retract_handle' });
        },
        'Wheel spinner on': () => {
          window.Unlimited3D.showAnnotations({ annotationObjects: [{ annotations: ["Wheel spinner off"] }] });
          window.Unlimited3D.hideAnnotations({ annotations: ["Open", "Extend handle", "Wheel spinner on"] });
          window.Unlimited3D.activateModifier({ modifier: 'wheel_spinner_on' });
        },
        'Wheel spinner off': () => {
          window.Unlimited3D.activateAnimationState({ animationSet: 'default_camera_desktop' });
          window.Unlimited3D.resetCameraPosition({ name: 'Camera Desktop' });
          window.Unlimited3D.activateModifier({ modifier: 'wheel_spinner_off' });
        }
      };

      if (annotationActions[annotationName]) {
        annotationActions[annotationName]();
      }
    }
  };

  useImperativeHandle(ref, () => ({
    showAnnotations: () => {
      window.Unlimited3D.showAnnotations({
        annotationObjects: [
          { annotations: ["Open", "Extend handle", "Wheel spinner on"] }
        ]
      });
    },
    hideAnnotations: () => {
      window.Unlimited3D.activateTransition({ transition: 'default_camera_desktop' });
      window.Unlimited3D.hideAnnotations({
        annotations: ["Open", "Close", "Extend handle", "Retract handle", "Wheel spinner on", "Wheel spinner off"]
      });
    }
  }));

  const checkDevice = () => window.innerWidth > 768 ? 'desktop' : 'mobile';

  return <div id="container3d"></div>;
});

export default ThreeDConfigurator;
