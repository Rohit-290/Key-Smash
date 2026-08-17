const box = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");






document.addEventListener("keydown",(e)=>{
   
    let num = `b${random(8)}`;
    const gen = document.getElementById(`${num}`);
    gen.innerText = e.key.toUpperCase();
    setTimeout(() => {
     gen.innerText = "";}, 3000);
});

const cleandiv = () => {
     gen.innerText = "";
}

 function random(number){
    return Math.floor(Math.random()*number)+1;
 }