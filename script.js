// 1. TA CONFIGURATION FIREBASE - REMPLACE PAR TES VRAIES CLÉS ICI
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "ybb-church.firebaseapp.com",
  projectId: "ybb-church",
  storageBucket: "ybb-church.firebasestorage.app",
  messagingSenderId: "VOTRE_ID",
  appId: "VOTRE_APP_ID"
};

// 2. INITIALISATION DE FIREBASE
firebase.initializeApp(firebaseConfig);

// Optionnel : pour vérifier que Firestore est prêt
const db = firebase.firestore();

// 3. FONCTION DE TEST - Bienvenue
function afficherBienvenue() {
  console.log("Bienvenue sur le site de YBB CHURCH ! Firebase est connecté avec succès.");
  console.log("Projet:", firebaseConfig.projectId);
}

// Lancement au chargement de la page
document.addEventListener('DOMContentLoaded', afficherBienvenue);
