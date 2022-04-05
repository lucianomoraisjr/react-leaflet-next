import { MapContainer, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CustomMarker } from "./CustomMarker"
import styles from './styles.module.scss'
//import './styles.scss'
import { bookmarks } from "./Bookmarks";
import { iconTraditional } from "./Icons";

interface Iprorps {
  center: [number, number]
}
const Map = ({ center }: Iprorps) => {

  return (
    <div className={styles.customdiv}>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {bookmarks.map((key, index) => (
          <CustomMarker key={index} icon={key.icon ? key.icon : iconTraditional} position={key.position}>
            <Popup>{key.popup}</Popup>
          </CustomMarker>
        ))}

      </MapContainer>
    </div>
  );
};

export default Map;