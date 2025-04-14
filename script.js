const menuToggle = document.getElementById("menu-toggle");
const linksList = document.querySelector(".links__list");

menuToggle.addEventListener("click", () => {
  linksList.classList.toggle("active");
});
