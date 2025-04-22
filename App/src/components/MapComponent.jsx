
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';



//This hook will trigger a rerender of the map component

const ResizeFix = () => {

  const map = useMap();

  useEffect(  () => {
    //...
      setTimeout(() => { //run every 100ms
        map.invalidateSize(); //
      }, 100);

    }, [map]); //dependency array on map : will rerun if map changes specifically (not on every render)

  return null;
};



export default function MapComponent({className=""}) {
  return (

    <>

    <MapContainer center={[45.49873118113557, -73.61905977862406]} zoom={16} scrollWheelZoom={true} 
    className={"w-full h-full " +className}
    preferCanvas={true}>

        <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className=''
        tileSize={256}
        
        />

        <ResizeFix />

        <Marker position={[45.49867862469836, -73.61849153110195]}>
            <Popup>
                <p className='text-xs font-bold text-center'>Université de Montréal - Pavillon Jean Brillant</p>
                 <p className='text-xs font-thin text-center'>3200 Rue Jean Brillant, Montréal</p>
                 <p className="text-center text-xs"><a target="_blank" href='https://maps.app.goo.gl/H87LqN48jBFaYjfg8'>Voir sur Google Maps</a></p>
            </Popup>
        </Marker>
    </MapContainer>

  </>
  )
}
