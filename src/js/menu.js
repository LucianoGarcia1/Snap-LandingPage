const btnClick = document.querySelector(".btnMenu");
const nav = document.querySelector(".nav");
const btnImage = document.querySelector(".btnMenu img")

btnClick.addEventListener("click", () =>{
    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        btnImage.src = "assets/img/icon-close-menu.svg";

    }else{
        btnImage.src = "assets/img/icon-menu.svg";
    }
})