import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
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
const db = getFirestore(app);

const signUpBtn = document.querySelector("#btn");
const errorMsg = document.querySelector("#error");

// register
if (signUpBtn) {
  signUpBtn.addEventListener("click", (e) => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        await setDoc(doc(db, "users", user.uid), userData);
        window.location.href = "login.html";
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // errorMsg.innerHTML = error.message;
        alert(error.message);
        // ..
      });
  });
}

const loginBtn = document.querySelector("#btnIn");
if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          window.location.href = "welcome.html";
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
}
// login
// const auth = getAuth();

// db

// Register (Auth, and database for users)
// Login (Auth, and database for users)
