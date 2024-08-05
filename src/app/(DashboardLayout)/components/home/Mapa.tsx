import { Map, MapCameraChangedEvent, Pin, Marker, AdvancedMarker } from '@vis.gl/react-google-maps';
import { MarkerWithInfowindow } from './AdvancedMarker';

const Mapa = () => (
    <Map
        mapId={process.env.NEXT_PUBLIC_KEY_MAP}
        mapTypeId={"hybrid"}
        defaultZoom={20}
        defaultCenter={{ lat: 10.29790641335879, lng: -85.76098157952704 }}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
        <MarkerWithInfowindow></MarkerWithInfowindow>
    </Map>
);
export default Mapa;
