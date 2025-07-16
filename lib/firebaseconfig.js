import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEjXHzpNYXsoXenVRcMJDWgFEPvR40Ij4",
    authDomain: "realtime-locationsharing.firebaseapp.com",
    projectId: "realtime-locationsharing",
    storageBucket: "realtime-locationsharing.firebasestorage.app",
    messagingSenderId: "502106244299",
    appId: "1:502106244299:web:0be5f040f10a7f994e074e",
    measurementId: "G-74PCKMXJXW",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export const db = getFirestore(app);


// Initialize Analytics (only in browser environment)
let analytics
if (typeof window !== "undefined") {
    analytics = getAnalytics(app)
}

export { analytics }
