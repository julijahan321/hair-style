const menuBtn = document.getElementById("menu-btn");
const sidenav = document.getElementById("side_nav");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
menu.addEventListener("click", () => {
  sidenav.style.display = "block";
});
menu.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "block";
  sidenav.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sidenav.style.display = "none";
  menu.style.display = "block";
  closeBtn.style.display = "none";
});
