const box = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");
const aud = document.querySelector(".aud");
let counter = 0; 

document.addEventListener("keydown",(e)=>{
    let num = `b${random(8)}`;
    const gen = document.getElementById(`${num}`);
    let col = `rgb(${random(255)} ${random(255)} ${random(255)})` ;
    if(gen.innerText = e.key.toUpperCase()){
        const con = document.querySelector(".c2");
        con.innerText = counter++ ;
    };
    gen.style.color = col ;
    aud.play();
    setTimeout(() => {
     gen.innerText = "";
    }, 3000);
});


const cleandiv = () => {
     gen.innerText = "";
}

 function random(number){
    return Math.floor(Math.random()*number)+1;
 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          