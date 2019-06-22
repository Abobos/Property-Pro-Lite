const propertyDetailsPage = document.querySelector("#propertyDetailsPage");
const propertyDetailsCard = document.querySelector("#propertyDetailsCard");
const reportForm = document.querySelector("#reportForm");
const flagAdvertBtn = document.querySelector("#flagAdvertBtn");

if (propertyDetailsPage) {
  flagAdvertBtn.addEventListener("click", () => {
    propertyDetailsCard.classList.add("ab-hide");
    reportForm.classList.remove("ab-hide");
  });
}