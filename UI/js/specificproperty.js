const specificPropertyAdvertPage = document.querySelector(
  "#specificPropertyAdvertPage"
);
const propertyAdvertDetailsCard = document.querySelector(
  "#propertyAdvertDetailsCard"
);
const updateForm = document.querySelector("#updateForm");
const updateAdvertBtn = document.querySelector("#updateAdvertBtn");
const updateBtn = document.querySelector("#updateBtn");
const markBtn = document.querySelector("#markBtn");
const deleteAdvertBtn = document.querySelector("#deleteAdvertBtn");
const modal = document.querySelector(".ab-modal");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

if (specificPropertyAdvertPage) {
  buttonController(updateAdvertBtn, propertyAdvertDetailsCard, updateForm);

  deleteAdvertBtn.addEventListener("click", () => {
    modal.classList.remove("ab-hide");
    noBtn.addEventListener("click", () => {
      modal.classList.add("ab-hide");
    });
    yesBtn.addEventListener("click", () => {
      window.location.replace("mypropertyadverts.html");
    });
  });
  markBtn.addEventListener("click", () => {
    modal.classList.remove("ab-hide");
    noBtn.addEventListener("click", () => {
      modal.classList.add("ab-hide");
    });
    yesBtn.addEventListener("click", () => {
      const parentElement = markBtn.parentElement.previousElementSibling;
      const statusDetails = parentElement.children[1].children[6].children[1];
      modal.classList.add("ab-hide");
      statusDetails.textContent = "Sold";
      statusDetails.previousElementSibling.innerHTML = `Status  <i class="fa fa-minus-circle ab-red"></i>`;
    });
  });
  updateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateForm.classList.add("ab-hide");
    propertyAdvertDetailsCard.classList.remove("ab-hide");
  });
}
