const openSideNavBtn = document.querySelector("#openSideNav");
const closeSideNavBtn = document.querySelector("#closeSideNav");
const sideNav = document.querySelector("#sideNav");

openSideNavBtn.addEventListener("click", () => {
  sideNav.classList.remove("ab-hide");
});

closeSideNavBtn.addEventListener("click", () => {
  sideNav.classList.add("ab-hide");
});

const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", e => {
  e.preventDefault();
  window.location.href = "searchproperty.html";
});
