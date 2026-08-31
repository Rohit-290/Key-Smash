const btn = document.querySelector(".btn");
const aud = document.querySelector(".aud");
const aud1 = document.querySelector(".aud1");
const anime = document.querySelector(".anime");
const panda = document.querySelector(".panda");
const ball1 = document.querySelector(".ball1");
const ball2 = document.querySelector(".ball2");
const ball3 = document.querySelector(".ball3");
const ball4 = document.querySelector(".ball4");
const ball5 = document.querySelector(".ball5");
const ball6 = document.querySelector(".ball6");

let counter = 1; 


const playBgm = () => {
    return new Promise((res,rej) => { 
    let p2 = aud1.play();    
    aud1.loop = true;
    p2.then((res)=>{
        panda.style.visibility = "visible" ;
        setTimeout(()=>{
        panda.style.visibility = "hidden" 
        },10000);
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
        console.log("Success");
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
        playBtn();  
        
        const con = document.querySelector(".c2");
        con.innerText = counter ++ ;
        gen.style.transform = `translate(${random(1200)}px , ${random(400)}px)`;
    };
    gen.style.color = col ;
    setTimeout(() => {
        gen.innerText = "" ;
        }, 3000);
          ballonceleb();
    if(counter==2){
        playBgm();
    }
  
});


const cleandiv = () => {
    gen.innerText = "" ;
}

 function random(number){
    return Math.floor(Math.random()*number)+1;
 }                      
 
const ballonceleb = () => {
    if(counter==51 || counter==101 || counter == 201){ 
     ball1.style.visibility = "visible";
     ball2.style.visibility = "visible";
     ball3.style.visibility = "visible";
     ball4.style.visibility = "visible";
     ball5.style.visibility = "visible";
     ball6.style.visibility = "visible";
    
     setTimeout(()=>{

    ball1.style.visibility = "hidden";
    ball2.style.visibility = "hidden";
    ball3.style.visibility = "hidden";
    ball4.style.visibility = "hidden";
    ball5.style.visibility = "hidden";
    ball6.style.visibility = "hidden";
    
    },9000);
}
}
