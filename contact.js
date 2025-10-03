// 🌍 Map setup for Tarija, Bolivia
function initMap() {
  const location = { lat: -21.535, lng: -64.729 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

// 🔐 Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// 🔧 Firebase config for LacarneTarija
const firebaseConfig = {
  apiKey: "AIzaSyDuq5Eb6hQtGuwE0_p8MxzFugXjus3xxbg",
  authDomain: "lacarnetarija.firebaseapp.com",
  projectId: "lacarnetarija",
  storageBucket: "lacarnetarija.firebasestorage.app",
  messagingSenderId: "259295299386",
  appId: "1:259295299386:web:8fdbc2c38cd31a5075b203",
  measurementId: "G-JK47LG2J5R"
};

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📨 Form submission handler
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();

  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      msg,
      timestamp: new Date()
    });
    alert("Mensaje enviado correctamente ✅");
    document.getElementById("contact-form").reset();
  } catch (error) {
    console.error("Error al enviar:", error);
    alert("Hubo un error al enviar el mensaje ❌");
  }
});
