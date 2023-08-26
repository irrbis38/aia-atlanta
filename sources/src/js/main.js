document.addEventListener("DOMContentLoaded", function (event) {
  const header_burger = document.querySelector(".header__burger");

  header_burger.addEventListener("click", () => {
    header_burger.classList.toggle("active");
  });
});

// Your functions here
