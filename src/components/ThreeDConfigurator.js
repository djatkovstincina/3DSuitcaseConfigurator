import React, { useEffect } from 'react';

const ThreeDConfigurator = () => {
  useEffect(() => {
    const options = {
      distID: 'latest',
      solution3DName: 'suitcase-color',
      projectName: 'resources-for-videos-and-marketing-purposes',
      solution3DID: '62766',
      containerID: 'container3d_replace',
    };
    window.Unlimited3D.init(options);
  }, []);

  return <div id="container3d_replace"></div>;
};

export default ThreeDConfigurator;
