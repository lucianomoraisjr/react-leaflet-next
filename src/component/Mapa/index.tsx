import { MapContainer, TileLayer,  Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import { Marker,CustomMarker } from "./CustomMarker"

//import icon from '../../dist/logoEscola.png';
import L from "leaflet";
const Map = () => {
  
    const iconPerson =  new L.Icon({
       // iconSize: [38, 95],
        iconUrl:'./img/marker-icon.png',
    });
  
  //@react-icons/all-files/fa/FaBeer
    return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CustomMarker icon={iconPerson} draggable position={[40.8054, -74.0241]} 
      
      >
        <Popup>Hey ! I live here</Popup>
      </CustomMarker>
    </MapContainer>
  );
};

export default Map;