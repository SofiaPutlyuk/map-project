import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import redCartoon from '../images/red-full-cartoon.png'
import yellowCartoon from '../images/yellow-full-cartoon.png'
const Map = () => (
<div className='wrapper-map'>
<div className='cartoon-map'>
<img src={yellowCartoon} alt='yellow-cartoon' className="smiley yellow"/>
<img src={redCartoon}  alt="red-cartoon" className="smiley red"/>
</div>
<MapContainer
center={[40.645, -73.880]} 
zoom={14}
style={{ width: '760px', height: '760px', borderRadius: '50%', overflow: 'hidden'}}
scrollWheelZoom={false}
className="map"
>
<TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution=""
/>
</MapContainer>
    </div>
)
export default Map;
