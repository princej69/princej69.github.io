// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0jDjJu96aUYbHMWHJc8yVMV7eDA3z3bQ",
  authDomain: "princej69-web-database.firebaseapp.com",
  projectId: "princej69-web-database",
  storageBucket: "princej69-web-database.appspot.com",
  messagingSenderId: "837108960749",
  appId: "1:837108960749:web:0c9c582c9d2ee2151d6be4",
  measurementId: "G-876JKR62EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);