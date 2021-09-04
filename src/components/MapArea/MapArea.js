import './MapArea.css';
import 'leaflet/dist/leaflet.css';

import React, { useContext } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';

import { AppContext } from '../../app/app.context';
import { LocationIcon } from './LocationIcon';

export const MapArea = () => {
  const {
    ipState: [ipConfig],
  } = useContext(AppContext);

  const ChangeMapView = ({ coords }) => {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  };

  return (
    <div className="map-container">
      {ipConfig.lat && ipConfig.lng && (
        <MapContainer
          style={{ width: '100%', height: '100%', zIndex: 9 }}
          center={[ipConfig.lat, ipConfig.lng]}
          zoom={18}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeMapView coords={[ipConfig.lat, ipConfig.lng]} />
          <Marker icon={LocationIcon} position={[ipConfig.lat, ipConfig.lng]}></Marker>
        </MapContainer>
      )}
    </div>
  );
};
