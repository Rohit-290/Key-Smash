/* selecting elements----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

const btn = document.querySelector(".btn");
const aud = document.querySelector(".aud");
const aud1 = document.querySelector(".aud1");
const anime = document.getElementsByClassName(".anime");
const panda = document.querySelector(".panda");
const ball0 = document.querySelector(".ball0");
const ball1 = document.querySelector(".ball1");
const ball2 = document.querySelector(".ball2");
const ball3 = document.querySelector(".ball3");
const ball4 = document.querySelector(".ball4");
const ball5 = document.querySelector(".ball5");

/* setting values----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

let counter = 1; 

function random(number){
    return Math.floor(Math.random()*number)+1;
 }                      
 


/* building functions----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

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
 

const cleandiv = () => {
    gen.innerText = "" ;
}



const animation0 = ball0.animate(
    [ { transform: "translate(0px,0px)"},{transform: "translate(-50px,-50px)"},{transform: "translate(50px,-100px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-150px)"},
        {transform: "translate(50px,-200px) skew(-6deg,-4deg)" },{transform: "translate(-50px,-250px)"},{transform: "translate(50px,-300px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-350px)"},
        {transform: "translate(50px,-400px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-450px)"},{transform: "translate(50px,-500px)skew(-6deg,-4deg)"}]
   ,{duration: 10000,
    iteration: "Infinity",
    }
)

const animation1 = ball1.animate(
    [ { transform: "translate(0px,0px)"},{transform: "translate(-50px,-50px)"},{transform: "translate(50px,-100px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-150px)"},
        {transform: "translate(50px,-200px) skew(-6deg,-4deg)" },{transform: "translate(-50px,-250px)"},{transform: "translate(50px,-300px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-350px)"},
        {transform: "translate(50px,-400px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-450px)"},{transform: "translate(50px,-500px)skew(-6deg,-4deg)"}]
   ,{duration: 10000,
    iteration: "Infinity"}
)

const animation2 = ball2.animate(
    [ { transform: "translate(0px,0px)"},{transform: "translate(-50px,-50px)"},{transform: "translate(50px,-100px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-150px)"},
        {transform: "translate(50px,-200px) skew(-6deg,-4deg)" },{transform: "translate(-50px,-250px)"},{transform: "translate(50px,-300px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-350px)"},
        {transform: "translate(50px,-400px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-450px)"},{transform: "translate(50px,-500px)skew(-6deg,-4deg)"}]
   ,{duration: 10000,
    iteration: "Infinity"}
)

const animation3 = ball3.animate(
    [ { transform: "translate(0px,0px)"},{transform: "translate(-50px,-50px)"},{transform: "translate(50px,-100px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-150px)"},
        {transform: "translate(50px,-200px) skew(-6deg,-4deg)" },{transform: "translate(-50px,-250px)"},{transform: "translate(50px,-300px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-350px)"},
        {transform: "translate(50px,-400px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-450px)"},{transform: "translate(50px,-500px)skew(-6deg,-4deg)"}]
   ,{duration: 10000,
    iteration: "Infinity"}
)

const animation4 = ball4.animate(
    [ { transform: "translate(0px,0px)"},{transform: "translate(-50px,-50px)"},{transform: "translate(50px,-100px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-150px)"},
        {transform: "translate(50px,-200px) skew(-6deg,-4deg)" },{transform: "translate(-50px,-250px)"},{transform: "translate(50px,-300px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-350px)"},
        {transform: "translate(50px,-400px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-450px)"},{transform: "translate(50px,-500px)skew(-6deg,-4deg)"}]
   ,{duration: 10000,
    iteration: "Infinity"}
)

const animation5 = ball5.animate(
    [ { transform: "translate(0px,0px)"},{transform: "translate(-50px,-50px)"},{transform: "translate(50px,-100px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-150px)"},
        {transform: "translate(50px,-200px) skew(-6deg,-4deg)" },{transform: "translate(-50px,-250px)"},{transform: "translate(50px,-300px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-350px)"},
        {transform: "translate(50px,-400px)skew(-6deg,-4deg)"},{transform: "translate(-50px,-450px)"},{transform: "translate(50px,-500px)skew(-6deg,-4deg)"}]
   ,{duration: 10000,
    iterations: "Infinity"}
)


/* event handling----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

document.addEventListener("keydown",(e)=>{
    const gen = document.getElementById("b1");
    let col = `rgb(${random(255)} ${random(255)} ${random(255)})` ;
    if(gen.innerText = e.key.toUpperCase()){
        playBtn();  
       
        if(counter == 50){
        ball0.style.visibility = "visible";
        ball1.style.visibility = "visible";
        ball2.style.visibility = "visible";
        ball3.style.visibility = "visible";
        ball4.style.visibility = "visible";
        ball5.style.visibility = "visible";
        animation0.play();
        animation1.play();
        animation2.play();
        animation3.play();
        animation4.play();
        animation5.play();
        }

        const con = document.querySelector(".c2");
        con.innerText = counter ++ ;
        gen.style.transform = `translate(${random(1200)}px , ${random(400)}px)`;
    }
    
    gen.style.color = col ;
    setTimeout(() => {
        gen.innerText = "" 
        }, 3000);
        if(counter == 2){
        playBgm();
    }
      setTimeout(() => {
        ball0.style.visibility = "hidden";
        ball1.style.visibility = "hidden";
        ball2.style.visibility = "hidden";
        ball3.style.visibility = "hidden";
        ball4.style.visibility = "hidden";
        ball5.style.visibility = "hidden";
        } , 8000);
        
})




 

