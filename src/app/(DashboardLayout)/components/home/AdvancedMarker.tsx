import React, { useState } from 'react';
import {
    AdvancedMarker,
    InfoWindow,
    useAdvancedMarkerRef,
    CollisionBehavior
} from '@vis.gl/react-google-maps';

export const MarkerWithInfowindow = () => {
    const [infowindowOpen, setInfowindowOpen] = useState(true);
    const [markerRef, marker] = useAdvancedMarkerRef();

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                onClick={() => setInfowindowOpen(true)}
                position={{ lat: 10.64235260056596, lng: -85.43754553183437 }}
                title={'AdvancedMarker que abre una Infowindow cuaando se clickea.'}
                collisionBehavior={CollisionBehavior.REQUIRED}
            />
            {infowindowOpen && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={200}
                    onCloseClick={() => setInfowindowOpen(false)}>
                    ¡Ven a conseguir tus metas!
                </InfoWindow>
            )}
        </>
    );
};