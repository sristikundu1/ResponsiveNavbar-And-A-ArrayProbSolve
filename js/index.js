const menu = document.getElementById("menusection");
const navlink = document.querySelector(".header")

// function that will toggle between the menu icons that will show in the small device 
const toggleMenuItem = () => {
    navlink.classList.toggle("active");
};

menu.addEventListener("click", () => toggleMenuItem());
