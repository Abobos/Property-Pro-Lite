const searchBtn = document.querySelector("#searchBtn");
const indexPage = document.querySelector("#indexPage");
const viewPropertyBtns = document.querySelectorAll(".viewProperty");


if (indexPage) {
  searchBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "index.html";
  });

  viewPropertyBtns.forEach(viewPropertyBtn => {
    viewPropertyBtn.addEventListener("click", () => {
      window.location.replace("propertydetails.html");
    });
  });
}