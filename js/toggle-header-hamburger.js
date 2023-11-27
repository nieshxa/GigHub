// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.querySelector(".hamburger");
//   const links = document.querySelector(".links");

//   hamburger.addEventListener("click", function () {
//     links.classList.toggle("active");
//   });
// });
// $(document).ready(function () {
//   $("#apply-now-link").click(function () {
//     $("#apply-now-link").addClass("active");
//     $("#hire-now-link").removeClass("active");
//   });

//   $("#hire-now-link").click(function () {
//     $("#hire-now-link").addClass("active");
//     $("#apply-now-link").removeClass("active");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".links");
  const login = document.querySelector(".login-btn");
  const ddownlogin = document.querySelector(".ddown-login");
  const applyNowLink = document.getElementById("apply-now-link");
  const hireNowLink = document.getElementById("hire-now-link");

  hamburger.addEventListener("click", function () {
    links.classList.toggle("active");
  });

  login.addEventListener("click", function () {
    ddownlogin.classList.toggle("active");
  });

  applyNowLink.addEventListener("click", function () {
    applyNowLink.classList.add("active");
    hireNowLink.classList.remove("active");
  });

  hireNowLink.addEventListener("click", function () {
    hireNowLink.classList.add("active");
    applyNowLink.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
    const target = event.target;

    // Check if the clicked element is not the hamburger, apply-now-link, or hire-now-link
    if (
      !target.matches(".hamburger") &&
      !target.matches("#apply-now-link") &&
      !target.matches("#hire-now-link") &&
      !target.matches(".login-btn")
    ) {
      links.classList.remove("active");
      applyNowLink.classList.remove("active");
      ddownlogin.classList.remove("active");
      hireNowLink.classList.remove("active");
    }
  });
});
