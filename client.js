// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Create three roots: two flat panels on the left and the right, and a Location
  // to mount rendered models in 3D space
  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);
  // r360.renderToSurface(
  //   r360.createRoot('TopPosts'),
  //   leftPanel,
  // );
  // r360.renderToSurface(
  //   r360.createRoot('CurrentPost'),
  //   rightPanel,
  // );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('view1', { /* initial props */ }),
    leftPanel
  );

  r360.renderToSurface(
    r360.createRoot('view2', { /* initial props */ }),
    rightPanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('pan1.JPG'));
}

window.React360 = {init};
