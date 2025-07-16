


'use client'
import { useRouter } from "next/navigation";

import { useState, useEffect, useRef } from 'react'
import ProfileSection from '../components/ProfileSection';
import { socket } from '../../lib/socket';

import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebaseconfig";

const Markericonn = '/marker.svg'; // Path relative to public/

export default function Home() {
    const router = useRouter();
    const [username, setUsername] = useState("");

    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    setUsername(userDoc.data().name || "Unnamed User");
                }
            }
        });

        return () => unsub();
    }, []);

    const handleConnectShare = () => {
    }

    const handleSavedLocations = () => {
    }

    const handleLocationHistory = () => {
        router.push("/Home/LocHistory");

    }

    const handleSettings = () => {
        router.push("/Home/settings");
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/Dashboard");
        } catch (error) {
            console.error("Logout error:", error);
        }
    }

    const handleProfileClick = () => {
        console.log("Profile clicked")
    // Handle profile dropdown toggle
      }
    const mapRef = useRef(null);
    const markersRef = useRef({}); // Store markers by socket id

    useEffect(() => {
        let leaflet;
        let markerShadow, L;

        const loadMap = async () => {
            if (typeof window !== 'undefined') {
                // Dynamically import leaflet and its assets
                const leafletModule = await import('leaflet');
                L = leafletModule.default || leafletModule;
                await import('leaflet/dist/leaflet.css');
                markerShadow = (await import('leaflet/dist/images/marker-shadow.png')).default;

                // Fix leaflet's default icon path
                delete L.Icon.Default.prototype._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: Markericonn,
                    iconUrl: Markericonn,
                    shadowUrl: markerShadow,
                });

                if (!mapRef.current) {
                    mapRef.current = L.map('map').setView([0, 0], 15);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: 'OpenStreetMap'
                    }).addTo(mapRef.current);
                }

                if (navigator.geolocation) {
                    navigator.geolocation.watchPosition(
                        (position) => {
                            const { longitude, latitude } = position.coords;
                            mapRef.current.setView([latitude, longitude], 15);
                            socket.emit('send-location', {
                                latitude,
                                longitude
                            });
                        },
                        (error) => {
                            console.log('Error getting location:', error)
                        },
                        {
                            enableHighAccuracy: true,
                            maximumAge: 0,
                            timeout: 3000
                        }
                    );
                }

                // Create your custom SVG icon
                const customIcon = L.icon({
                    iconUrl: Markericonn,
                    iconRetinaUrl: Markericonn,
                    iconSize: [40, 40],
                    iconAnchor: [20, 40],
                    popupAnchor: [0, -40],
                    
                });

                // --- SOCKET RECEIVE LOCATION MARKER LOGIC ---
                socket.on("receive-location", (data) => {
                    const { id, latitude, longitude } = data;
                    if (markersRef.current[id]) {
                        markersRef.current[id].setLatLng([latitude, longitude]);
                    } else {
                        markersRef.current[id] = L.marker([latitude, longitude], { icon: customIcon }).addTo(mapRef.current);
                    }
                });
                
            }
        };

        loadMap();

        
        // Cleanup on unmount
        return () => {
            socket.off("receive-location");
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div className="flex h-screen">
            {/* Map - 80% */}
            <div className="w-[80%] p-2">
                <div id="map" className="w-full h-full rounded-lg" />
            </div>

            {/* Profile Section - 20% */}
            <div className="w-[20%] bg-white border-l p-4 overflow-y-auto">
                <ProfileSection
                    userName= {username}
                    onConnectShare={handleConnectShare}
                    onSavedLocations={handleSavedLocations}
                    onLocationHistory={handleLocationHistory}
                    onSettings={handleSettings}
                    onLogout={handleLogout}
                    onProfileClick={handleProfileClick}
                />
            </div>
        </div>
    )
}
