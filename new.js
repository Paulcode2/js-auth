// Change page feature
function changePage() {
  setTimeout(() => {
    window.location.href = "welcome.html";
  }, 2000);
}

// Password show and hide feature
const password = document.querySelector("#password");
const btn = document.querySelector("#hide");
const showBtn = document.querySelector("#show");
const offBtn = document.querySelector("#off");

// clicks on btn, showBtn to show password and hide offBtn
btn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    showBtn.style.display = "none";
    offBtn.style.display = "block";
  } else if (password.type === "text") {
    password.type = "password";
    showBtn.style.display = "block";
    offBtn.style.display = "none"
  }
});
