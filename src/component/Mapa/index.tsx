import { MapContainer, TileLayer,  Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import { Marker,CustomMarker } from "./CustomMarker"
import {BiAngry} from 'react-icons/bi'
import ReactDOMServer from 'react-dom/server';

//import icon from '../../dist/logoEscola.png';
import L from "leaflet";
const Map = () => {
  
    const iconPerson =  new L.Icon({
       // iconSize: [38, 95],
        iconUrl:'./img/marker-icon.png',
    });

    const mapNodeIcon = L.divIcon({
        html: ReactDOMServer.renderToString(<BiAngry/>),
         
        iconAnchor: [10, 10],
        popupAnchor: [0, -19],
        iconSize: [55, 55],
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
      <CustomMarker icon={mapNodeIcon} draggable position={[40.8054, -74.0241]} 
      
      >
        <Popup>Hey ! I live here</Popup>
      </CustomMarker>
    </MapContainer>
  );
};

export default Map;