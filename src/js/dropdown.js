const dropsA = document.querySelectorAll(".drop a");
const divs = document.querySelectorAll(".drop div");
const arrow = document.querySelectorAll(".down");

const dropdown = (index) =>{
    divs[index].classList.toggle("active");
    arrow[index].classList.toggle("up");
}
dropsA.forEach((i, index)=>{
    i.addEventListener("click", () =>{
        dropdown(index);
    });
})