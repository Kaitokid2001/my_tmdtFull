import React, { useState } from "react";
import { GoogleMap, MarkerF, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import {GoogleMapDiv} from "../styles/styleGoogleMap";

const containerStyle = {
    width: '400px',
    height: '200px',
    borderRadius: 10,
}

const home = {
    lat: 10.833440,
    lng: 106.619788,
}

export default function GoogleMapSection() {
    const [open, setOpen] = useState(false);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    })

    const [map, setMap] = React.useState<google.maps.Map | null>(null)

    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(home)
        map.fitBounds(bounds)

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback() {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMapDiv>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={home}
                zoom={16}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <MarkerF position={home} onClick={() => setOpen(true)}/>
                {open && (
                    <InfoWindow
                    position={home}
                    onCloseClick={() => setOpen(false)}
                    >
                        <div>
                            <strong>Nhà của tui</strong><br />
                            24/3, Khu Phố 32, Phường Đông Hưng Thuận, TP Hồ Chí Minh
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </GoogleMapDiv>
    ) : (
        <GoogleMapDiv>Loading...</GoogleMapDiv>
    )
}