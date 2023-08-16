function mobile() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("opened");
    var nav = document.querySelector(".ab-nav-menu");
    nav.classList.toggle("mobile");
}
// var dropdownbtn = document.querySelector(".has-dropdown");
// var dropdown = document.querySelector(".dropdown");
// dropdownbtn.addEventListener("click", open);
// function open() {
//     dropdown.classList.toggle("drop");
// }


var header = document.getElementById("ab-header");
var lastScroll = 0;
var threshold = 40;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= threshold) {
        header.classList.remove("scroll-up");
        header.classList.remove("scroll-down");
    }

    if (currentScroll > lastScroll && currentScroll >= threshold) {
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
        console.log("niche");
    }

    if (currentScroll < lastScroll && currentScroll >= threshold) {
        header.classList.add("scroll-up");
        console.log("uper");
    }

    lastScroll = currentScroll;
});


