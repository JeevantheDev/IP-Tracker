import L from 'leaflet';
import iconLocation from '../../assets/icons/icon-location.svg';

const LocationIcon = new L.Icon({
  iconUrl: iconLocation,
  iconRetinaUrl: iconLocation,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 50),
});

export { LocationIcon };
