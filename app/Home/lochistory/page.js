'use client';

import { useEffect, useRef, useState } from 'react';

import { db, auth } from '@/lib/firebaseconfig';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import BackButton from '@/app/components/Backbutton';

const LocationHistoryPage = () => {
    const [markers, setMarkers] = useState([]);
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const leafletRef = useRef(null); // Store Leaflet module
    const customIconRef = useRef(null); // Store custom icon


    // 🔁 Auth & realtime updates
    useEffect(() => {
        const unsubAuth = onAuthStateChanged(auth, (user) => {
            if (!user) return;

            const unsubSnapshot = onSnapshot(
                collection(db, 'users', user.uid, 'locationHistory'),
                (snapshot) => {
                    const data = snapshot.docs.map((doc) => {
                        const d = doc.data();
                        return {
                            lat: d.latitude,
                            lng: d.longitude,
                            time: new Date(d.timestamp).toLocaleTimeString(),
                        };
                    });
                    setMarkers(data.reverse());
                }
            );

            return () => unsubSnapshot();
        });

        return () => unsubAuth();
    }, []);

    // ⏱ Save location every hour
    useEffect(() => {
        const interval = setInterval(() => {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const user = auth.currentUser;
                if (!user) return;

                await addDoc(collection(db, 'users', user.uid, 'locationHistory'), {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    timestamp: new Date().toISOString(),
                });
            });
        }, 3600000); // every hour

        return () => clearInterval(interval);
    }, []);

    // 🗺️ Init map
    useEffect(() => {
        let map;
        let isMounted = true;
        (async () => {
            if (!mapContainerRef.current) return;
            const L = (await import('leaflet')).default;
            await import('leaflet/dist/leaflet.css');
            leafletRef.current = L;
            customIconRef.current = L.icon({
                iconUrl: '/marker.svg',
                // You can add iconSize, iconAnchor, popupAnchor if needed
            });
            mapInstanceRef.current = map;
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(map);

            // Center map on user's live location on load
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        if (!isMounted) return;
                        const { latitude, longitude } = position.coords;
                        map.setView([latitude, longitude], 13);
                    },
                    (error) => {
                        // Optionally handle error
                    }
                );
            }
        })();
        return () => {
            isMounted = false;
            if (map) map.remove();
        };
    }, []);

    // 🎯 Update markers
    useEffect(() => {
        const map = mapInstanceRef.current;
        const L = leafletRef.current;
        const customIcon = customIconRef.current;
        if (!map || !L || !customIcon) return;

        map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        markers.forEach(({ lat, lng, time }) => {
            L.marker([lat, lng], { icon: customIcon })
                .addTo(map)
                .bindPopup(`Time: ${time}`);
        });
    }, [markers]);

    const focusLocation = (lat, lng) => {
        if (mapInstanceRef.current) {
            mapInstanceRef.current.setView([lat, lng], 13);
        }
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
            {/* Left Side: Location List */}
            <div className="w-1/2 p-6 overflow-y-auto bg-white shadow-xl rounded-l-2xl m-4 pt-10">
                <BackButton />
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">📍 Location History</h2>
                <div className="space-y-4">
                    {markers.map((m, i) => (
                        <div
                            key={i}
                            className="cursor-pointer bg-blue-100 hover:bg-blue-200 transition rounded-xl p-4 text-gray-700 shadow-sm"
                            onClick={() => focusLocation(m.lat, m.lng)}
                        >
                            <div className="font-medium">Lat: {m.lat}, Lng: {m.lng}</div>
                            <div className="text-sm text-gray-500">Time: {m.time}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side: Map */}
            <div className="w-1/2 m-4 rounded-r-2xl overflow-hidden shadow-xl">
                <div ref={mapContainerRef} className="h-full w-full rounded-r-2xl" />
            </div>
        </div>
    );
};

export default LocationHistoryPage;
