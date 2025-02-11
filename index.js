const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// document
//   .getElementById("scroll-link")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.querySelector("#testimonials").scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });

document
  .getElementById("gallery-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#gallery").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
