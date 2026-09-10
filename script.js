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
const petbot0 = document.querySelector(".petbot0");
const petbot1 = document.querySelector(".petbot1");
const petbot2 = document.querySelector(".petbot2");
const petbot3 = document.querySelector(".petbot3");
const petbot4 = document.querySelector(".petbot4");
const petbot5 = document.querySelector(".petbot5");
const petbot6 = document.querySelector(".petbot6");
const petbot7 = document.querySelector(".petbot7");
const petbot8 = document.querySelector(".petbot8");
const petbot9 = document.querySelector(".petbot9");
const petbot10 = document.querySelector(".petbot10");
const petbot11 = document.querySelector(".petbot11");
const petbot12 = document.querySelector(".petbot12");
const petbot13 = document.querySelector(".petbot13");
const petbot14 = document.querySelector(".petbot14");
const petbot15 = document.querySelector(".petbot15");
const petbot16 = document.querySelector(".petbot16");
const nightMode = document.querySelector(".night-Mode");
const topp = document.querySelector(".top");
const rev0 = document.querySelector(".rev0");
const rev1 = document.querySelector(".rev1");
const rev2 = document.querySelector(".rev2");
const rev3 = document.querySelector(".rev3");
const rev4 = document.querySelector(".rev4");
const rev5 = document.querySelector(".rev5");
const rev6 = document.querySelector(".rev6");
const rev7 = document.querySelector(".rev7");
const rev8 = document.querySelector(".rev8");
const rev9 = document.querySelector(".rev9");
const onBoard = document.querySelector(".Onboard");
const heading = document.querySelector(".hf");


/* setting values----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

let counter = 1;

function random(number) {
  return Math.floor(Math.random() * number) + 1;
}

let th = 0;

topp.style.background = "linear-gradient(180deg, rgb(100, 181, 246), rgb(187, 222, 251), rgb(227, 242, 253))";

rev0.style.visibility = "hidden";
rev1.style.visibility = "hidden";
rev2.style.visibility = "hidden";
rev3.style.visibility = "hidden";
rev4.style.visibility = "hidden";
rev5.style.visibility = "hidden";
rev6.style.visibility = "hidden";
rev7.style.visibility = "hidden";
rev8.style.visibility = "hidden";
rev9.style.visibility = "hidden";

heading.innerText = "Fun Starts Here!"


/* building functions----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

const playBgm = () => {
  return new Promise((res, rej) => {
    let p2 = aud1.play();
    aud1.loop = true;
    p2.then((res) => {
      console.log("Fetched BGM");
    });
    p2.catch((rej) => {
      console.log("Unable to fetch BGM");
    });
  });
};

const playBtn = () => {
  return new Promise((res, rej) => {
    let p1 = aud.play();
    p1.then((res) => {
      console.log("Success");
    });
    p1.catch((rej) => {
      console.log("Unable to fetch music for button press due to some reasons");
    });
  });
};

const cleandiv = () => {
  gen.innerText = "";
};

const animation0 = ball0.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-50px)" },
    { transform: "translate(50px,-100px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-150px)" },
    { transform: "translate(50px,-200px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-250px)" },
    { transform: "translate(50px,-300px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-350px)" },
    { transform: "translate(50px,-400px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-450px)" },
    { transform: "translate(50px,-500px)skew(-6deg,-4deg)" },
  ],
  { duration: 10000, iteration: "Infinity" },
);

const animation1 = ball1.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-50px)" },
    { transform: "translate(50px,-100px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-150px)" },
    { transform: "translate(50px,-200px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-250px)" },
    { transform: "translate(50px,-300px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-350px)" },
    { transform: "translate(50px,-400px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-450px)" },
    { transform: "translate(50px,-500px)skew(-6deg,-4deg)" },
  ],
  { duration: 10000, iteration: "Infinity" },
);

const animation2 = ball2.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-50px)" },
    { transform: "translate(50px,-100px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-150px)" },
    { transform: "translate(50px,-200px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-250px)" },
    { transform: "translate(50px,-300px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-350px)" },
    { transform: "translate(50px,-400px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-450px)" },
    { transform: "translate(50px,-500px)skew(-6deg,-4deg)" },
  ],
  { duration: 10000, iteration: "Infinity" },
);

const animation3 = ball3.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-50px)" },
    { transform: "translate(50px,-100px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-150px)" },
    { transform: "translate(50px,-200px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-250px)" },
    { transform: "translate(50px,-300px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-350px)" },
    { transform: "translate(50px,-400px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-450px)" },
    { transform: "translate(50px,-500px)skew(-6deg,-4deg)" },
  ],
  { duration: 10000, iteration: "Infinity" },
);

const animation4 = ball4.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-50px)" },
    { transform: "translate(50px,-100px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-150px)" },
    { transform: "translate(50px,-200px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-250px)" },
    { transform: "translate(50px,-300px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-350px)" },
    { transform: "translate(50px,-400px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-450px)" },
    { transform: "translate(50px,-500px)skew(-6deg,-4deg)" },
  ],
  { duration: 10000, iteration: "Infinity" },
);

const animation5 = ball5.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-50px)" },
    { transform: "translate(50px,-100px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-150px)" },
    { transform: "translate(50px,-200px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-250px)" },
    { transform: "translate(50px,-300px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-350px)" },
    { transform: "translate(50px,-400px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-450px)" },
    { transform: "translate(50px,-500px)skew(-6deg,-4deg)" },
  ],
  { duration: 10000, iterations: "Infinity" },
);

/* event handling----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

document.addEventListener("keydown", (e) => {
  const gen = document.getElementById("b1");
  let col = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  if ((gen.innerText = e.key.toUpperCase())) {
    playBtn();

    if (counter == 50) {
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
    con.innerText = counter++;
    gen.style.transform = `translate(${random(1200)}px , ${random(400)}px)`;
  }

  gen.style.color = col;
  setTimeout(() => {
    gen.innerText = "";
  }, 3000);
  if (counter == 2) {
    playBgm();
  }
  setTimeout(() => {
    ball0.style.visibility = "hidden";
    ball1.style.visibility = "hidden";
    ball2.style.visibility = "hidden";
    ball3.style.visibility = "hidden";
    ball4.style.visibility = "hidden";
    ball5.style.visibility = "hidden";
  }, 8000);
});


  nightMode.addEventListener("click",(e)=>{
  topp.style.background = "linear-gradient(180deg, #000000 0%, #0a0e27 40%, #1a1a3e 70%, #2d1b4e 100%)";
  th++;
  rev0.style.visibility = "visible";
  rev1.style.visibility = "visible";
  rev2.style.visibility = "visible";
  rev3.style.visibility = "visible";
  rev4.style.visibility = "visible";
  rev5.style.visibility = "visible";
  rev6.style.visibility = "visible";
  rev7.style.visibility = "visible";
  rev8.style.visibility = "visible";
  rev9.style.visibility = "visible";
  if(th%2==0){
    topp.style.background = "linear-gradient(180deg, rgb(100, 181, 246), rgb(187, 222, 251), rgb(227, 242, 253))";
    rev0.style.visibility = "hidden";
    rev1.style.visibility = "hidden";
    rev2.style.visibility = "hidden";
    rev3.style.visibility = "hidden";
    rev4.style.visibility = "hidden";
    rev5.style.visibility = "hidden";
    rev6.style.visibility = "hidden";
    rev7.style.visibility = "hidden";
    rev8.style.visibility = "hidden";
    rev9.style.visibility = "hidden";
  }
})


 window.addEventListener("load", ()=>{
    onBoard.style.visibility = "visible";
    onBoard.style.zIndex = "9999999";
    panda.style.visibility = "visible";
    panda.style.zIndex = "99999999";
   setTimeout(()=>{
    onBoard.style.visibility = "hidden";
    panda.style.visibility = "hidden";
   },10000)
 })