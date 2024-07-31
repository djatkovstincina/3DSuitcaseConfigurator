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
      camera: checkDevice() === 'desktop' ? 'Camera Desktop' : 'Camera Mobile',
      cameraControl: { autoRotate: true },
    };
    window.Unlimited3D.init(options, config);
  }, []);

  const handlePointerClick = (objectsClick) => {
    if (objectsClick.length > 0 && objectsClick[0].type === 'annotation') {
      const annotationName = objectsClick[0].name;
      let modifier;

      switch (annotationName) {
        case 'Open':
          modifier = 'open';
          break;
        case 'Close':
          modifier = 'close';
          break;
        case 'Extend handle':
          modifier = 'extend_handle';
          break;
        case 'Retract handle':
          modifier = 'retract_handle';
          break;
        case 'Wheel spinner on':
          modifier = 'wheel_spinner_on';
          break;
        case 'Wheel spinner off':
          modifier = 'wheel_spinner_off';
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
      })
    },
    hideAnnotations: () => {
      window.Unlimited3D.hideAnnotations({ annotations: ["Open", "Extend handle", "Wheel spinner on"] });
    }
  }));

  const checkDevice = () => {
    return window.innerWidth > 768 ? 'desktop' : 'mobile';
  };

  return <div id="container3d"></div>;
});

export default ThreeDConfigurator;