const btn = document.querySelector(".btn");
const aud = document.querySelector(".aud");
const aud1 = document.querySelector(".aud1");
const anime = document.querySelector(".anime");
let counter = 1; 


const playBgm = () => {
    return new Promise((res,rej) => { 
    let p2 = aud1.play();
    aud1.loop = true;
    p2.then((res)=>{
        console.log("success");
    });
    p2.catch((rej)=>{
        console.log("Unable to fetch BGM");
    });
})
}


const playBtn = () =>{
    return new Promise((res,rej) => {
    let p1 = aud.play();
    p1.then((res)=>{
        console.log("success");
     });
    p1.catch((rej)=>{
        console.log("Unable to fetch music for button press due to some reasons");
    });  
    })
}
 

document.addEventListener("keydown",(e)=>{
    const gen = document.getElementById("b1");
    let col = `rgb(${random(255)} ${random(255)} ${random(255)})` ;
    if(gen.innerText = e.key.toUpperCase()){
        playBgm();   
        const con = document.querySelector(".c2");
        con.innerText = counter ++ ;
        gen.style.transform = `translate(${random(1200)}px , ${random(500)}px)`;
    };
    gen.style.color = col ;
    playBtn();
    setTimeout(() => {
        gen.innerText = "";
        }, 3000);
});


const cleandiv = () => {
    gen.innerText = "" ;
}

 function random(number){
    return Math.floor(Math.random()*number)+1;
 }                      
 
