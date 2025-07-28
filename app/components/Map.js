'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

const Map = ({ markers }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (!mapRef.current) return;

        const instance = L.map(mapRef.current).setView([28.6139, 77.2090], 10);
        setMap(instance);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(instance);

        return () => {
            instance.remove();
        };
    }, []);

    useEffect(() => {
        if (!map) return;

        // Clear existing markers
        map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        // Add new markers
        markers.forEach(({ lat, lng, time }) => {
            L.marker([lat, lng])
                .addTo(map)
                .bindPopup(`Time: ${time}`);
        });
    }, [markers, map]);

    return <div ref={mapRef} className="h-full w-full rounded-r-2xl" />;
};

export default Map;