const loginBtn = document.querySelector("#loginBtn");

  loginBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.replace("searchproperty.html");
  });

