import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWR_kUz8_QTW7DqQs_sgvcOyq7UohtJU0",
  authDomain: "techeduuserauth.firebaseapp.com",
  projectId: "techeduuserauth",
  storageBucket: "techeduuserauth.firebasestorage.app",
  messagingSenderId: "704806526175",
  appId: "1:704806526175:web:c2ae2c0ac6772b6a29dd6a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Check if we're on the signup page
const signUpBtn = document.querySelector("#btn");
if (signUpBtn) {
  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        await setDoc(doc(db, "users", user.uid), userData);
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// Check if we're on the login page
const signInBtn = document.querySelector("#btnIn");
if (signInBtn) {
  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}
