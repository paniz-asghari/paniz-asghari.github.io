const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});

date.innerHTML = new Date().getFullYear();