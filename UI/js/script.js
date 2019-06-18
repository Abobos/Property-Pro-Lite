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
const userPropertyAdvertPage = document.querySelector(
  "#userPropertyAdvertPage"
);

const specificPropertyAdvertPage = document.querySelector(
  "#specificPropertyAdvertPage"
);
const siginPage = document.querySelector("#signinPage");
const sigupPage = document.querySelector("#signupPage");
const loginBtn = document.querySelector("#loginBtn");
const registerBtn = document.querySelector("#registerBtn");
const viewPropertyAdvertBtns = document.querySelectorAll(
  ".viewPropertyAdvertBtn"
);

const propertyAdvertDetailsCard = document.querySelector(
  "#propertyAdvertDetailsCard"
);
const updateForm = document.querySelector("#updateForm");
const updateAdvertBtn = document.querySelector("#updateAdvertBtn");
const deleteAdvertBtn = document.querySelector("#deleteAdvertBtn");

const modal = document.querySelector(".ab-modal");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
// const modalCloseBtn = document.querySelector("#modalCloseBtn");
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

if (userPropertyAdvertPage) {
  viewPropertyAdvertBtns.forEach(viewPropertyAdvertBtn => {
    viewPropertyAdvertBtn.addEventListener("click", () => {
      window.location.replace("specificpropertyadvert.html");
    });
  });
}

if (specificPropertyAdvertPage) {
  updateAdvertBtn.addEventListener("click", () => {
    propertyAdvertDetailsCard.classList.add("ab-hide");
    updateForm.classList.remove("ab-hide");
  });

  deleteAdvertBtn.addEventListener("click", () => {
    modal.classList.remove("ab-hide");
  });
  // modalCloseBtn.addEventListener("click", closeModal);
  noBtn.addEventListener("click", () => {
    modal.classList.add("ab-hide");
  });
  yesBtn.addEventListener("click", () => {
    window.location.replace("mypropertyadverts.html");
  });
}

if (siginPage) {
  loginBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.replace("searchproperty.html");
  });
}

if (signupPage) {
  registerBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.replace("searchproperty.html");
  });
}
