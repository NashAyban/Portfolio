
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyARO7w5rwzPKTlS0vhm2S0mAyc0-4SPHm4",
  authDomain: "portfolio-ab33a.firebaseapp.com",
  projectId: "portfolio-ab33a",
  storageBucket: "portfolio-ab33a.firebasestorage.app",
  messagingSenderId: "123042693225",
  appId: "1:123042693225:web:b6629e48927f69445f62f8",
  measurementId: "G-692WENQGM0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Test connection
console.log("✅ Firebase initialized:", app.name);
// console.log("📦 Firestore connected:", db ? "Yes" : "No");