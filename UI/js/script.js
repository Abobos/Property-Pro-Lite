const openSideNavBtn = document.querySelector("#openSideNav");
const closeSideNavBtn = document.querySelector("#closeSideNav");
const sideNav = document.querySelector("#sideNav");
const nav = document.querySelector("#nav");
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
const updateBtn = document.querySelector("#updateBtn");
const markBtn = document.querySelector("#markBtn");
const deleteAdvertBtn = document.querySelector("#deleteAdvertBtn");
const postAdvertBtn = document.querySelector("#postAdvertBtn");
const modal = document.querySelector(".ab-modal");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
// const modalCloseBtn = document.querySelector("#modalCloseBtn");
const propertyDetailsCard = document.querySelector("#propertyDetailsCard");
const reportForm = document.querySelector("#reportForm");
const flagAdvertBtn = document.querySelector("#flagAdvertBtn");
const viewPropertyBtns = document.querySelectorAll(".viewProperty");

openSideNavBtn.addEventListener("click", () => {
  sideNav.style.width = "250px";
  if (screen.width >= "600") nav.style.marginRight = "250px";
});

closeSideNavBtn.addEventListener("click", () => {
  sideNav.style.width = "0";
  nav.style.marginRight = "0";
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
  postAdvertBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.replace("mypropertyadverts.html");
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
    noBtn.addEventListener("click", () => {
      modal.classList.add("ab-hide");
    });
    yesBtn.addEventListener("click", () => {
      window.location.replace("mypropertyadverts.html");
    });
  });
  // modalCloseBtn.addEventListener("click", closeModal);
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
  updateBtn.addEventListener("click", e => {
    e.preventDefault();
    updateForm.classList.add("ab-hide");
    propertyAdvertDetailsCard.classList.remove("ab-hide");
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
