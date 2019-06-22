const searchPropertyPage = document.querySelector("#searchPropertyPage");
const searchBtn = document.querySelector("#searchBtn");
const viewPropertyBtns = document.querySelectorAll(".viewProperty");


if (searchPropertyPage) {
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
