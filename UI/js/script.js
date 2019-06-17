const openSideNavBtn = document.querySelector("#openSideNav");
const closeSideNavBtn = document.querySelector("#closeSideNav");
const sideNav = document.querySelector("#sideNav");
const searchBtn = document.querySelector("#searchBtn");

const indexPage = document.querySelector("#indexPage");
const searchPropertyPage = document.querySelector("#searchPropertyPage");
const propertyAdvertPage = document.querySelector("#propertyAdvertPage");

const fileUploadBtn = document.querySelector("#fileUploadBtn");
const uploadedImage = document.querySelector("#uploadedImage");

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

if (propertyAdvertPage) {
  const readFileAsync = files => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.addEventListener("load", () => {
      const Image = document.createElement("img");
      Image.src = fileReader.result;
      Image.alt = "property";
      Image.setAttribute("class", "ab-img");
      uploadedImage.appendChild(Image);
    });
  };

  fileUploadBtn.addEventListener("change", () => {
    if (uploadedImage.firstChild) {
      uploadedImage.removeChild(uploadedImage.firstChild);
    }
    readFileAsync(fileUploadBtn.files);
  });
}
