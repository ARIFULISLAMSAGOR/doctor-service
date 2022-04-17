// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWamCRvaZF7P1Kj1Qdj1cnTV4uMAXm53k",
    authDomain: "doctor-service-provider-329be.firebaseapp.com",
    projectId: "doctor-service-provider-329be",
    storageBucket: "doctor-service-provider-329be.appspot.com",
    messagingSenderId: "55913297798",
    appId: "1:55913297798:web:ebce5dea0d0bdef2349e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;