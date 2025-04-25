import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import redCartoon from '../images/red-full-cartoon.png'
import yellowCartoon from '../images/yellow-full-cartoon.png'
import cloud from '../images/cloud-map.png'
import cloudTwo from '../images/cloud-two.png'
import cloudThree from '../images/cloud-three.png'
const Map = () => (
<div className='wrapper-map'>
<img src={cloudTwo} className='cloud-two' alt='cloud-two'/>
<img src={cloudThree} className='cloud-three' alt='cloud-three'/>
<div className='cartoon-map'>
<img src={cloud} className='cloud-map' alt='cloud-map'/>
<div>
<img src={yellowCartoon} alt='yellow-cartoon' className="smiley yellow"/>
<img src={redCartoon}  alt="red-cartoon" className="smiley red"/>
</div>
</div>
<MapContainer
center={[40.645, -73.880]} 
zoom={14}
style={{ borderRadius: '50%', overflow: 'hidden'}}
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
