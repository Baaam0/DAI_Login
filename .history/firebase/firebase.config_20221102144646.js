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
require('dotenv').config()

// const firebaseConfig = {
//   apiKey: process.env.LOGIN_API_KEY,
//   authDomain: process.env.LOGIN_AUTH_DOMAIN,
//   projectId: process.env.LOGIN_PROJECT_ID,
//   storageBucket: process.env.LOGIN_STORAGE_BUCKET,
//   messagingSenderId: process.env.LOGIN_MESSAGING_SENDER_ID,
//   appId: process.env.LOGIN_APP_ID
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);