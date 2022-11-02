import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

 
const firebaseConfig = {
  apiKey: "AIzaSyAZYgPP9PIc0B-Lc1H8wSV7DGTjA2ka6VQ",
  authDomain: "dai-login-with-firebase.firebaseapp.com",
  projectId: "dai-login-with-firebase",
  storageBucket: "dai-login-with-firebase.appspot.com",
  messagingSenderId: "22562046268",
  appId: "1:22562046268:web:7213fcb1cba14900ae1e39"
};

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_appId
// }; 

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);