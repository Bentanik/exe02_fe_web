/* eslint-disable @typescript-eslint/no-unused-vars */
import { setStorageItem } from "@/utils/local-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const firebaseAppAuth = getAuth(firebaseApp);

onAuthStateChanged(firebaseAppAuth, async (user) => {
  if (user) {
    console.log("User signed in");
    const token = await user.getIdToken(true);
    if (token) {
      setStorageItem("accessToken", `Bearer ${token}`);
    }
  } else {
    console.log("No user signed in.");
  }
});

export { firebaseApp, firebaseAppAuth };
