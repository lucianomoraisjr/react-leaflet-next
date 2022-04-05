import styles from './styles.module.scss'
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import { FaSchool } from 'react-icons/fa';

export const iconTraditional = new L.Icon({
  iconUrl: './img/marker-icon.png',
});

export const iconEsola = L.divIcon({
    html: ReactDOMServer.renderToString(<div className={styles['custom-icon']}><FaSchool /></div>),
    className: "styles['custom-icon']",
    iconAnchor: [10, 10],
    popupAnchor: [0, -19],
    iconSize: [35, 35],
  });