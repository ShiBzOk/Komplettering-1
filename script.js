function changeTheme() {
var picker = document.getElementById("style-picker");
var val = picker.value;

if (val === "standard") {
document.body.style.backgroundColor = "#eeeeee";
} else if (val === "blue") {
document.body.style.backgroundColor = "#9bebc7";
} else if (val === "red") {
document.body.style.backgroundColor = "#f7a6ad";
} else if (val === "green") {
document.body.style.backgroundColor = "#bdf39c";
}
}

document.getElementById("style-picker").addEventListener("change", changeTheme);

var menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function() {
var menuList = this.nextElementSibling;

if (menuList.style.display === "block") {
menuList.style.display = "none";
} else {
menuList.style.display = "block";
}
});

window.addEventListener("resize", function() {
var width = window.innerWidth;
var menuList = document.querySelector("nav ul");

if (width > 767) {
menuList.removeAttribute("style");
} else {
menuList.style.display = "none";
}
});