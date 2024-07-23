import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";
import {getAnalytics, isSupported} from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "emelie-christina-trenkler.firebaseapp.com",
  databaseURL: "https://emelie-christina-trenkler-default-rtdb.firebaseio.com",
  projectId: "emelie-christina-trenkler",
  storageBucket: "emelie-christina-trenkler.appspot.com",
  messagingSenderId: "506877292870",
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-7YWF8NS623",
};
async function fetchBlogData() {
  const res = await fetch("http://localhost:3000/api/firebase", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.response;
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
// let analytics;
// isSupported().then((result) => {
//   analytics = getAnalytics(app);
// });
export {db, storage, fetchBlogData};
