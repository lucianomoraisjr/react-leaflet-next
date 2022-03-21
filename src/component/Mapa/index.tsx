import { MapContainer, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CustomMarker } from "./CustomMarker"
import ReactDOMServer from 'react-dom/server';
import { FaSchool } from 'react-icons/fa'
import styles from './styles.module.scss'
//import './styles.scss'
interface IMARKER {
  tipoIcon: string
  popup?: string
  position: [number, number]
}

interface Iprorps {
  markers: IMARKER[]
  center: [number, number]

}

import L from "leaflet";
const Map = (props: Iprorps) => {
  const { markers, center } = props;
  const iconPerson = new L.Icon({
    iconUrl: './img/marker-icon.png',
  });

  const Iconesola = L.divIcon({
    html: ReactDOMServer.renderToString(<div className={styles['custom-icon']}><FaSchool /></div>),
    className: "styles['custom-icon']",
    iconAnchor: [10, 10],
    popupAnchor: [0, -19],
    iconSize: [35, 35],
  });


  return (
   <div className={styles.customdiv}>
      <MapContainer
      center={center}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((key, index) => (
        (key.tipoIcon == "escola" && <CustomMarker key={index} icon={Iconesola} position={key.position}>
          <Popup>{key.popup}</Popup>
        </CustomMarker>)
      ))}

    </MapContainer>
   </div>
  );
};

export default Map;