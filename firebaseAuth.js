import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyCV0kyT5rua95IeCvRBtLG6kO4gz9Z_mRY",
  authDomain: "authentication-project-4aa02.firebaseapp.com",
  projectId: "authentication-project-4aa02",
  storageBucket: "authentication-project-4aa02.firebasestorage.app",
  messagingSenderId: "501151188405",
  appId: "1:501151188405:web:e77191c4eb441e45ffc5fc",
  measurementId: "G-672YS4X5Q4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// register
const signUpBtn = document.querySelector("#btn");
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

if (signUpBtn) {
  signUpBtn.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });
}

// login
// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// db
