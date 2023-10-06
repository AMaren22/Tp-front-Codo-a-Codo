const bShowMobileLinks = document.querySelector("#hmenu");
const mobileMenu = document.querySelector(".links");

bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
})