const openSideNavBtn = document.querySelector("#openSideNav");
const closeSideNavBtn = document.querySelector("#closeSideNav");
const sideNav = document.querySelector("#sideNav");
const searchBtn = document.querySelector("#searchBtn");

const indexPage = document.querySelector("#indexPage");
const searchPropertyPage = document.querySelector("#searchPropertyPage");
const propertyDetailsPage = document.querySelector("#propertyDetailsPage");
const propertyDetailsCard = document.querySelector("#propertyDetailsCard");

const reportForm = document.querySelector("#reportForm");
const flagAdvertBtn = document.querySelector("#flagAdvertBtn");
const viewPropertyBtns = document.querySelectorAll(".viewProperty");

openSideNavBtn.addEventListener("click", () => {
  sideNav.classList.remove("ab-hide");
});

closeSideNavBtn.addEventListener("click", () => {
  sideNav.classList.add("ab-hide");
});

if (indexPage || searchPropertyPage) {
  searchBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "searchproperty.html";
  });

  viewPropertyBtns.forEach(viewPropertyBtn => {
    viewPropertyBtn.addEventListener("click", () => {
      window.location.replace("propertydetails.html");
    });
  });
}

if (propertyDetailsPage) {
  flagAdvertBtn.addEventListener("click", () => {
    propertyDetailsCard.classList.add("ab-hide");
    reportForm.classList.remove("ab-hide");
  });
}
