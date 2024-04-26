// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = process.env.REACT_APP_AOUTH_API_KEY;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "login-signup01.firebaseapp.com",
    projectId: "login-signup01",
    storageBucket: "login-signup01.appspot.com",
    messagingSenderId: "574552417503",
    appId: "1:574552417503:web:68c37e579db9315e22b56a",
    measurementId: "G-P7DX5G9HJN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);