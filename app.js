const ham = document.querySelector(".mobile-hambuger");
const navLinks = document.querySelector(".nav-links");
ham.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});
