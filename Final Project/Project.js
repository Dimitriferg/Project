let newsletterBtn = document.querySelector(".newsletter-btn");
let newsletterBg = document.querySelector(".newsletter-bg");
let newsletterClose = document.querySelector(".newsletter-close");

newsletterBtn.addEventListener("click", function () {
  newsletterBg.classList.add("bg-active");
});

newsletterClose.addEventListener("click", function () {
  newsletterBg.classList.remove("bg-active");
});
