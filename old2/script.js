// script.js
document.addEventListener("DOMContentLoaded", () => {
  const password = document.querySelector("#password");
  const showBtn = document.querySelector("#hide");
  const eyeOff = document.querySelector("#eyeOff");
  const eyeOn = document.querySelector("#eyeOn");

  if (showBtn) {
    showBtn.addEventListener("click", () => {
      if (password.type === "password") {
        password.type = "text";
        eyeOff.style.display = "block";
        eyeOn.style.display = "none";
      } else {
        password.type = "password";
        eyeOff.style.display = "none";
        eyeOn.style.display = "block";
      }
    });
  } else {
    console.error("⚠️ #hide button not found in DOM");
  }
});
