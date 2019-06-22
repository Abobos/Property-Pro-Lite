const userPropertyAdvertPage = document.querySelector(
  "#userPropertyAdvertPage"
);

const viewPropertyAdvertBtns = document.querySelectorAll(
  ".viewPropertyAdvertBtn"
);

if (userPropertyAdvertPage) {
  viewPropertyAdvertBtns.forEach((viewPropertyAdvertBtn) => {
    viewPropertyAdvertBtn.addEventListener("click", () => {
      window.location.replace("specificpropertyadvert.html");
    });
  });
}

