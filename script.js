const btn = document.querySelector(".btn");
const aud = document.querySelector(".aud");
const aud1 = document.querySelector(".aud1");
const anime = document.querySelector(".anime");
let counter = 1; 
// aud1.play();

 
// anime.style.transform = translate(100 , 100);






document.addEventListener("keydown",(e)=>{
    const gen = document.getElementById("b1");
    let col = `rgb(${random(255)} ${random(255)} ${random(255)})` ;
    if(gen.innerText = e.key.toUpperCase()){
        const con = document.querySelector(".c2");
        con.innerText = counter ++ ;
        gen.style.transform = `translate(${random(1200)}px , ${random(500)}px)`;
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
 
