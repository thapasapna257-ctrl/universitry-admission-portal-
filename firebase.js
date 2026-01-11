 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCwlt7pbsyN26wV62kKUf4G7yBVhrkr_v8",
    authDomain: "university-admission-form.firebaseapp.com",
    projectId: "university-admission-form",
    storageBucket: "university-admission-form.firebasestorage.app",
    messagingSenderId: "229709792570",
    appId: "1:229709792570:web:f4178c9917f27ebaf27c03",
    measurementId: "G-W0LHGQ48EN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
