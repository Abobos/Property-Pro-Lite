const indexPage = document.querySelector("#indexPage");
const searchPropertyPage = document.querySelector("#searchPropertyPage");
const searchBtn = document.querySelector("#searchBtn");

const search = (page) => {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = page;
  });
}

if (searchPropertyPage) {
    search('searchproperty.html');
}
if (indexPage) {
  search('index.html');
}

