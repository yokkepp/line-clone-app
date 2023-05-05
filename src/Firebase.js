import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAkaVNhWcyYS9K_w4tdxvVHsdagjmoOaiw",
	authDomain: "line-clone-app-bca0b.firebaseapp.com",
	projectId: "line-clone-app-bca0b",
	storageBucket: "line-clone-app-bca0b.appspot.com",
	messagingSenderId: "145307633143",
	appId: "1:145307633143:web:fea2eafb1e79ab1a0f9af2",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
