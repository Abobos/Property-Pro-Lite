const viewPropertyBtns = document.querySelectorAll(".viewProperty");

viewPropertyBtns.forEach((viewPropertyBtn) => {
  viewPropertyBtn.addEventListener("click", () => {
    window.location.replace("propertydetails.html");
  });
});