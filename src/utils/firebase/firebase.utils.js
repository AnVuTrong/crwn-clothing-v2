// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
} from "firebase/auth";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCLusGDACbd06S5wI2mJr6iD_ySnsIE8Mo",
	authDomain: "crwn-clothing-db-3e9c3.firebaseapp.com",
	projectId: "crwn-clothing-db-3e9c3",
	storageBucket: "crwn-clothing-db-3e9c3.firebasestorage.app",
	messagingSenderId: "718582703929",
	appId: "1:718582703929:web:969e320164919e99dceae8",
	measurementId: "G-B8LJPNDYNC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
