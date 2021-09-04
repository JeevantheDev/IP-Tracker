import React from 'react';
import { HeaderArea } from '../../components/HeaderArea/HeaderArea';
import { MapArea } from '../../components/MapArea/MapArea';
import './mapScreen.css';

const MapScreen = () => {
  return (
    <div className="map-main-container">
      <HeaderArea />
      <MapArea />
    </div>
  );
};

export default MapScreen;
