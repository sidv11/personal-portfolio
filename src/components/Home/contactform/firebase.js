import { initializeApp } from "firebase/app";
import 'firebase/compat/database';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBCpdG6NpbUPLqSpt6UdgPCA86XfnkTpNs",
  authDomain: "resume-d8f63.firebaseapp.com",
  databaseURL: "https://resume-d8f63-default-rtdb.firebaseio.com",
  projectId: "resume-d8f63",
  storageBucket: "resume-d8f63.appspot.com",
  messagingSenderId: "42067576740",
  appId: "1:42067576740:web:d8e0f75f7ee7d250bae331",
  measurementId: "G-4HJE0FZBLL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);