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
      onPointerClick: (objectsClick) => handlePointerClick(objectsClick),
    };

    var config = {
      // cameraControl: { autoRotate: true },
      camera: checkDevice() === 'desktop' ? 'Camera Desktop' : 'Camera Mobile'
    };

    window.Unlimited3D.init(options, config);

    setTimeout(() => {
      if (window.Unlimited3D && window.Unlimited3D.hideAnnotations) {
        window.Unlimited3D.hideAnnotations({
          annotations: ["Open", "Extend handle", "Wheel spinner on"]
        });
      } else {
        console.error('Unlimited3D.hideAnnotations is not available.');
      }
    }, 1000);

  }, []);

  const handlePointerClick = (objectsClick) => {
    if (objectsClick.length > 0 && objectsClick[0].type === 'annotation') {
      const annotationName = objectsClick[0].name;
      let modifier;

      switch (annotationName) {
        case 'Open':
          modifier = 'open';
          window.Unlimited3D.showAnnotations({ annotationObjects: [{ annotations: ["Close"] }] });
          window.Unlimited3D.hideAnnotations({ annotations: ["Open", "Extend handle", "Wheel spinner on"] });
          break;
        case 'Close':
          modifier = 'close';
          window.Unlimited3D.activateTransition({transition: 'Suitcase Close'});
          window.Unlimited3D.resetCameraPosition({ name: 'Camera Desktop' });
          break;
        case 'Extend handle':
          modifier = 'extend_handle';
          window.Unlimited3D.showAnnotations({ annotationObjects: [{ annotations: ["Retract handle"] }] });
          window.Unlimited3D.hideAnnotations({ annotations: ["Open", "Extend handle", "Wheel spinner on"] });
          break;
        case 'Retract handle':
          modifier = 'retract_handle';
          window.Unlimited3D.activateAnimationState({ animationSet: 'default_camera_desktop' });
          window.Unlimited3D.resetCameraPosition({ name: 'Camera Desktop' });
          break;
        case 'Wheel spinner on':
          modifier = 'wheel_spinner_on';
          window.Unlimited3D.showAnnotations({ annotationObjects: [{ annotations: ["Wheel spinner off"] }] });
          window.Unlimited3D.hideAnnotations({ annotations: ["Open", "Extend handle", "Wheel spinner on"] });
          break;
        case 'Wheel spinner off':
          modifier = 'wheel_spinner_off';
          window.Unlimited3D.activateAnimationState({ animationSet: 'default_camera_desktop' });
          window.Unlimited3D.resetCameraPosition({ name: 'Camera Desktop' });
          break;
        default:
          modifier = null;
      }

      if (modifier) {
        window.Unlimited3D.activateModifier({ modifier });
      }
    }
  };

  useImperativeHandle(ref, () => ({

    showAnnotations: () => {
      window.Unlimited3D.showAnnotations({
        annotationObjects: [
          {
            annotations: ["Open", "Extend handle", "Wheel spinner on"],
          }
        ]
      });
    },
    hideAnnotations: () => {
      window.Unlimited3D.activateTransition({transition: 'default_camera_desktop'});
      window.Unlimited3D.hideAnnotations({ annotations: ["Open", "Close", "Extend handle", "Retract handle", "Wheel spinner on", "Wheel spinner off"] });
    }
  }));

  const checkDevice = () => {
    return window.innerWidth > 768 ? 'desktop' : 'mobile';
  };

  return <div id="container3d"></div>;
});

export default ThreeDConfigurator;