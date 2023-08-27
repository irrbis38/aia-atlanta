document.addEventListener("DOMContentLoaded", function (event) {
  // header
  const body = document.body;
  const header_burger = document.querySelector(".header__burger");
  const header_menu = document.querySelector(".header__menu");

  header_burger.addEventListener("click", () => {
    body.classList.toggle("lock");
    header_burger.classList.toggle("active");
    header_menu.classList.toggle("active");
  });

  const mq1199 = window.matchMedia("(min-width: 1199px)");

  mq1199.addEventListener("change", handleMQ);
});

function handleMQ(e) {
  if (e.matches) {
    body.classList.remove("lock");
    header_burger.classList.remove("active");
    header_menu.classList.remove("active");
  }
}
