const box = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");






box.forEach((box)=>{
document.addEventListener("keydown",(e)=>{
    box.innerText = e.key.toUpperCase();
    box.style.visibility = true;
});
});




 