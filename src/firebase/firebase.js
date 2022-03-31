import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOp7SJB4_RxIulp5H_vben8hJpk4CXouA",
  authDomain: "kevin-store.firebaseapp.com",
  projectId: "kevin-store",
  storageBucket: "kevin-store.appspot.com",
  messagingSenderId: "500746710085",
  appId: "1:500746710085:web:185c45167e258da2f7c72c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 