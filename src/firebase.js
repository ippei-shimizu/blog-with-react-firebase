import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeFy0pFUoVTdRCoprxMzkwD8aZB35SzBg",
  authDomain: "blog-with-react-firebase-e54a5.firebaseapp.com",
  projectId: "blog-with-react-firebase-e54a5",
  storageBucket: "blog-with-react-firebase-e54a5.appspot.com",
  messagingSenderId: "152822280771",
  appId: "1:152822280771:web:498b4af42f717e3d089af6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
