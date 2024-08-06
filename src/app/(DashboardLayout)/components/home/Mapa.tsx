import { Map, MapCameraChangedEvent, Pin, Marker, AdvancedMarker } from '@vis.gl/react-google-maps';
import { MarkerWithInfowindow } from './AdvancedMarker';

const Mapa = () => (
    <Map
        mapId={process.env.NEXT_PUBLIC_KEY_MAP}
        defaultZoom={20}
        defaultCenter={{ lat: 10.64235260056596, lng: -85.43754553183437 }}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
        <MarkerWithInfowindow></MarkerWithInfowindow>
    </Map>
);
export default Mapa;
