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
                position={{ lat: 10.297906766497913, lng: -85.76096867762179 }}
                title={'AdvancedMarker que abre una Infowindow cuaando se clickea.'}
                collisionBehavior={CollisionBehavior.REQUIRED}
            />
            {infowindowOpen && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={200}
                    onCloseClick={() => setInfowindowOpen(false)}>
                    ¡Ven a vivir una aventura emocionante con nuestro canopy y motos!
                </InfoWindow>
            )}
        </>
    );
};