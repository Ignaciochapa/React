import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9n1wNmiM9bIinfXkWYY-NtW53P_oIiak",
  authDomain: "ignaciochapa-react.firebaseapp.com",
  projectId: "ignaciochapa-react",
  storageBucket: "ignaciochapa-react.appspot.com",
  messagingSenderId: "124706745124",
  appId: "1:124706745124:web:a71fb8f8f6997819b3a1b1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);