const box = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");






box.forEach((box)=>{
box.addEventListener("keydown",(e)=>{
    box.innerText = e.key;
    box.style.visibility = true;
});
});




 