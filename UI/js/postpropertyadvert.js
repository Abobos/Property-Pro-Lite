const propertyAdvertPage = document.querySelector("#propertyAdvertPage");
const fileUploadBtn = document.querySelector("#fileUploadBtn");
const uploadedImage = document.querySelector("#uploadedImage");
const postAdvertBtn = document.querySelector("#postAdvertBtn");

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
