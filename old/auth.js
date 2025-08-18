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

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQqq-toizS0Fp-4fVTwrJBYNdFgBrGmPo",
  authDomain: "user-auth-cd3cc.firebaseapp.com",
  projectId: "user-auth-cd3cc",
  storageBucket: "user-auth-cd3cc.firebasestorage.app",
  messagingSenderId: "582746101083",
  appId: "1:582746101083:web:eeecd5430115b00ba1367e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Signup
const signUpBtn = document.querySelector("#btn");
if (signUpBtn) {
  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const errmsg = document.querySelector("#error");

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        try {
          await setDoc(doc(db, "users", user.uid), userData);
          console.log("User data hass been stored");
          window.location.href = "login.html";
          // location.reload();
        } catch (err) {
          console.log(err);
          setTimeout(() => {
            errmsg.innerHTML = "Failed to store data";
          }, 3000);
        }
      })
      .catch((error) => {
        setTimeout(() => {
          errmsg.innerHTML = error.message;
        }, 3000);
        // alert(error.message);
      });
  });
}

const signInBtn = document.querySelector("#btnIn");
if (signInBtn) {
  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        try {
          const userDocData = await getDoc(doc(db, "users", user.uid));
          if (userDocData.exists()) {
            window.location.href = "index.html";
          } else {
            setTimeout(() => {
              errmsg.innerHTML = "User Not Found";
            }, 3000); // alert("User Not Found");
          }
        } catch (err) {
          console.log(err);
          setTimeout(() => {
            errmsg.innerHTML = "An Error occured while verifying your data";
          }, 3000);
        }
      })
      .catch((error) => {
        setTimeout(() => {
          errmsg.innerHTML = "Wrong Email or password";
        }, 3000);
        // alert("Wrong Email or password");
        location.reload();
      });
  });
}

