const openSideNavBtn = document.querySelector("#openSideNav");
const closeSideNavBtn = document.querySelector("#closeSideNav");
const sideNav = document.querySelector("#sideNav");
const nav = document.querySelector("#nav");

openSideNavBtn.addEventListener("click", () => {
  sideNav.style.width = "250px";
  if (screen.width >= "600") nav.style.marginRight = "250px";
});

closeSideNavBtn.addEventListener("click", () => {
  sideNav.style.width = "0";
  nav.style.marginRight = "0";
});
