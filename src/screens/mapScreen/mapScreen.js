import './mapScreen.css';

import React from 'react';

import { HeaderArea } from '../../components/HeaderArea/HeaderArea';
import { MapArea } from '../../components/MapArea/MapArea';

const MapScreen = () => {
  return (
    <div className="map-main-container">
      <HeaderArea />
      <MapArea />
    </div>
  );
};

export default MapScreen;
