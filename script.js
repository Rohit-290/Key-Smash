/* selecting elements----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

const btn = document.querySelector(".btn");
const aud = document.querySelector(".aud");
const aud1 = document.querySelector(".aud1");
const con = document.querySelector(".c2");
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
const spacebar = document.querySelector(".Spacebar");
const trophy = document.querySelector(".trophy");
const load = document.querySelector(".loa");
const screen = document.querySelector(".scr");

/* setting values----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

let counter = 1;

function random(number) {
  return Math.floor(Math.random() * number) + 1;
}

let th = 0;

let medal = 1;
trophy.innerText = 0 ;

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

function lightingNightMode () {
  setInterval(()=>{
    nightMode.style.borderTop = "4px solid white";
    nightMode.style.borderBottom = "0px" ;
    nightMode.style.borderRight = "0px";
    nightMode.style.borderLeft= "0px";
      setTimeout(()=>{
    nightMode.style.borderRight = "8px solid white";
    nightMode.style.borderTop = "0px";
    nightMode.style.borderBottom = "0px";
    nightMode.style.borderLeft= "0px";
  },100);
     setTimeout(()=>{
    nightMode.style.borderBottom = "4px solid white" ;
    nightMode.style.borderRight = "0px";
    nightMode.style.borderTop = "0px";
  },200);
     setTimeout(()=>{
    nightMode.style.borderLeft = "8px solid white" ;
    nightMode.style.borderBottom = "0px" ;
    nightMode.style.borderRight = "0px";
    nightMode.style.borderTop = "0px";
  },300)
  },400)
  
  
 
 }
const loadation = load.animate(
  [
    {width: "0 vw"},
    {width: "0.7vw"},
    {width: "1.4vw"},
    {width: "2.1vw"},
    {width: "2.8vw"},
    {width: "3.5vw"},
    {width: "4.2vw"},
    {width: "4.9vw"},
    {width: "5.6vw"},
    {width: "6.3vw"},
    {width: "7vw"},
    {width: "7.7vw"},
    {width: "8.4vw"},
    {width: "9.1vw"},
    {width: "9.8vw"},
    {width: "10.5vw"},
    {width: "11.2vw"},
    {width: "11.9vw"},
    {width: "12.6vw"},
    {width: "13.3vw"},
    {width: "14vw"}
  ],
  {duration: 10000, easing: "linear"}
)

const animation0 = ball0.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-100px)" },
    { transform: "translate(50px,-200px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-300px)" },
    { transform: "translate(50px,-400px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-500px)" },
    { transform: "translate(50px,-600px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-700px)" },
    { transform: "translate(50px,-800px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-900px)" },
    { transform: "translate(50px,-1000px)skew(-6deg,-4deg)" },
  ],
  { duration: 20000, iterations: "Infinity" ,delay: 5000},
);

const animation1 = ball1.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-100px)" },
    { transform: "translate(50px,-200px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-300px)" },
    { transform: "translate(50px,-400px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-500px)" },
    { transform: "translate(50px,-600px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-700px)" },
    { transform: "translate(50px,-800px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-900px)" },
    { transform: "translate(50px,-1200px)skew(-6deg,-4deg)" },
  ],
  { duration: 21000, iterations: "Infinity" ,delay: 6000},
);

const animation2 = ball2.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-100px)" },
    { transform: "translate(50px,-200px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-300px)" },
    { transform: "translate(50px,-400px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-500px)" },
    { transform: "translate(50px,-600px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-700px)" },
    { transform: "translate(50px,-800px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-900px)" },
    { transform: "translate(50px,-1200px)skew(-6deg,-4deg)" },
  ],
  { duration: 21000, iterations: "Infinity" ,delay: 7000},
);

const animation3 = ball3.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-100px)" },
    { transform: "translate(50px,-200px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-300px)" },
    { transform: "translate(50px,-400px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-500px)" },
    { transform: "translate(50px,-600px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-700px)" },
    { transform: "translate(50px,-800px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-900px)" },
    { transform: "translate(50px,-1200px)skew(-6deg,-4deg)" },
  ],
  { duration: 21000, iterations: "Infinity" ,delay: 8000},
);

const animation4 = ball4.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-100px)" },
    { transform: "translate(50px,-200px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-300px)" },
    { transform: "translate(50px,-400px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-500px)" },
    { transform: "translate(50px,-600px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-700px)" },
    { transform: "translate(50px,-800px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-900px)" },
    { transform: "translate(50px,-1000px)skew(-6deg,-4deg)" },
  ],
  { duration: 20000, iterations: "Infinity" ,delay: 13000},
);

const animation5 = ball5.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(-50px,-100px)" },
    { transform: "translate(50px,-200px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-300px)" },
    { transform: "translate(50px,-400px) skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-500px)" },
    { transform: "translate(50px,-600px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-700px)" },
    { transform: "translate(50px,-800px)skew(-6deg,-4deg)" },
    { transform: "translate(-50px,-900px)" },
    { transform: "translate(50px,-1000px)skew(-6deg,-4deg)" },
  ],
  { duration: 20000, iterations: "Infinity" ,delay: 10000},
);

// const botimation1 = petbot0.animate(
//   [
//     { transform: "translate(0px)" },
//     { transform: "translate(50px)" },
//     { transform: "translate(100px)" },
//     { transform: "translate(150px)" },
//     { transform: "translate(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,5px)" },
//     { transform: "translate(350px,8px)" },
//     { transform: "translate(400px,11px)" },
//     { transform: "translate(450px,15px)" },
//     { transform: "translate(500px,19px)" },
//     { transform: "translate(550px,25px)" },
//     { transform: "translate(600px,30px)" },
//     { transform: "translate(650px,38px)" },
//     { transform: "translate(700px,44px)" },
//     { transform: "translate(750px,24px)" },
//     { transform: "translate(800px,16px)" },
//     { transform: "translate(850px,8px)"},
//     { transform: "translate(900px,-4px)"},
//     { transform: "translate(950px,-10px)"},
//     { transform: "translate(1000px,-12px)"}
//   ],
//   { duration: 16000, iterations: "Infinity", easing: "Linear" },
// );

// const botimation2 = petbot1.animate(
//   [
//     { transform: "translate(0px)" },
//     { transform: "translate(50px)" },
//     { transform: "translate(100px)" },
//     { transform: "translate(150px)" },
//     { transform: "translate(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,5px)" },
//     { transform: "translate(350px,6px)rotate(5deg)" },
//     { transform: "translate(400px,8px)rotate(6deg)" },
//     { transform: "translate(450px,12px)rotate(7deg)" },
//     { transform: "translate(500px,14px)rotate(8deg)" },
//     { transform: "translate(550px)rotate(8deg)"},
//     { transform: "translate(600px)rotate(8deg)"},
//     { transform: "translate(650px)rotate(8deg)"},
//     { transform: "translate(700px)rotate(8deg)"},
//     { transform: "translate(750px,4px)rotate(-7deg)" },
//     { transform: "translate(800px,5px)rotate(-6deg)" },
//     { transform: "translate(850px,6px)rotate(-5deg)" },
//     { transform: "translate(900px,8px)rotate(-7deg)" },
//     { transform: "translate(950px,12px)rotate(-6deg)" },
//     { transform: "translate(1000px,14px)rotate(-4deg)" },
//   ],
//   { duration: 16000, iterations: "Infinity" ,easing: "Linear"},
// );

// const botimation3 = petbot2.animate(
//   [
//     { transform: "translate(0px,)" },
//     { transform: "translate(50px)" },
//     { transform: "translate(100px)" },
//     { transform: "translate(150px)" },
//     { transform: "translate(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,5px)" },
//     { transform: "translate(350px,6px)" },
//     { transform: "translate(400px,8px)" },
//     { transform: "translate(450px,10px)" },
//     { transform: "translate(500px,14px)" },
//     { transform: "translate(550px,19px)" },
//     { transform: "translate(600px,25px)" },
//     { transform: "translate(650px,31px)" },
//     { transform: "translate(700px,35px)" },
//     { transform: "translate(750px,38px)" },
//     { transform: "translate(800px,24px)" },
//     { transform: "translate(850px,12px)" },
//     { transform: "translate(900px,5px)" },
//     { transform: "translate(950px,-5px)" },
//     { transform: "translate(1000px,10px)" },
//   ],
//   { duration: 16000, iterations: "Infinity", easing: "Linear" },
// );

// const botimation4 = petbot3.animate(
//   [
//     { transform: "translate(0px)" },
//     { transform: "translate(50px)" },
//     { transform: "translate(100px)" },
//     { transform: "translate(150px)" },
//     { transform: "translate(200px)" },
//     { transform: "translate(250px,5px)" },
//     { transform: "translate(300px,6px)" },
//     { transform: "translate(350px,6px)" },
//     { transform: "translate(400px,8px)" },
//     { transform: "translate(450px,10px)" },
//     { transform: "translate(500px,12px)" },
//     { transform: "translate(550px,17px)" },
//     { transform: "translate(600px,23px)" },
//     { transform: "translate(650px,29px)" },
//     { transform: "translate(700px,33px)" },
//     { transform: "translate(750px,38px)" },
//     { transform: "translate(800px,28px)" },
//     { transform: "translate(850px,16px)" },
//     { transform: "translate(900px,5px)" },
//     { transform: "translate(950px,-5px)" },
//     { transform: "translate(1000px,-8px)" },
//   ],
//   { duration: 16000, iterations: "Infinity" ,easing: "Linear"},
// );

// const botimation5 = petbot4.animate(
//   [
//      { transform: "translate(0px)" },
//     { transform: "translate(50px)" },
//     { transform: "translate(100px)" },
//     { transform: "translate(150px)" },
//     { transform: "translate(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,5px)" },
//     { transform: "translate(350px,8px)" },
//     { transform: "translate(400px,11px)" },
//     { transform: "translate(450px,15px)" },
//     { transform: "translate(500px,19px)" },
//     { transform: "translate(550px,25px)" },
//     { transform: "translate(600px,30px)" },
//     { transform: "translate(650px,38px)" },
//     { transform: "translate(700px,44px)" },
//     { transform: "translate(750px,24px)" },
//     { transform: "translate(800px,16px)" },
//     { transform: "translate(850px,8px)" },
//     { transform: "translate(900px,-4px)" },
//     { transform: "translate(950px,-10px)" },
//     { transform: "translate(1000px,-12px)" },,
//   ],
//   { duration: 16000, iterations: "Infinity" ,easing: "Linear"},
// );

// const botimation6 = petbot5.animate(
//   [
//     { transform: "translate(0px)" },
//     { transform: "translate(50px)" },
//     { transform: "translate(100px)" },
//     { transform: "translate(150px)" },
//     { transform: "translate(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,5px)" },
//     { transform: "translate(350px,6px)" },
//     { transform: "translate(400px,9px)" },
//     { transform: "translate(450px,15px)" },
//     { transform: "translate(500px,17px)" },
//     { transform: "translate(550px,22px)" },
//     { transform: "translate(600px,28px)" },
//     { transform: "translate(650px,34px)" },
//     { transform: "translate(700px,38px)" },
//     { transform: "translate(750px,28px)" },
//     { transform: "translate(800px,18px)" },
//     { transform: "translate(850px,8px)" },
//     { transform: "translate(900px,1px)" },
//     { transform: "translate(950px,-6px)" },
//     { transform: "translate(1000px,-12px)" },,
//   ],
//   { duration: 16000, iterations: "Infinity" ,easing: "Linear" },
// );

// const botimation7 = petbot6.animate(
//   [
//    { transform: "translate(0px)rotate(0deg)" },
//     { transform: "translate(50px,8px)rotate(45deg)" },
//     { transform: "translate(92px,12px)rotate(70deg)" },
//     { transform: "translate(146px,8px)rotate(45deg)" },
//     { transform: "translate(200px)rotate(0deg)" },
//     { transform: "translate(246px,8px)rotate(45deg)" },
//     { transform: "translate(292px,12px)rotate(70deg)" },
//     { transform: "translate(349px,8px)rotate(45deg)" },
//     { transform: "translate(398px)rotate(0deg)" },
//     { transform: "translate(448px,8px)rotate(45deg)" },
//     { transform: "translate(491px,12px)rotate(70deg)" },
//     { transform: "translate(548px,8px)rotate(45deg)" },
//     { transform: "translate(600px)rotate(0deg)" },
//     { transform: "translate(646px,8px)rotate(45deg)" },
//     { transform: "translate(692px,12px)rotate(70deg)" },
//     { transform: "translate(750px,8px)rotate(45deg)" },
//     { transform: "translate(798px,0px)rotate(0deg)" },
//     { transform: "translate(842px,8px)rotate(45deg)" },
//     { transform: "translate(892px,12px)rotate(70deg)" },
//     { transform: "translate(946px,9px)rotate(45deg)" },
//     { transform: "translate(1000px,0px)rotate(0deg)" }
//   ],
//   { duration: 16000, iterations: "Infinity" ,easing: "Linear" },
// );

// const botimation8 = petbot7.animate(
//   [
//   { transform: "translate(0px)" },
//     { transform: "translate(50px)" },
//     { transform: "translate(100px)" },
//     { transform: "translate(150px)" },
//     { transform: "translate(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,7px)" },
//     { transform: "translate(350px,9px)rotate(5deg)" },
//     { transform: "translate(400px,11px)rotate(6deg)" },
//     { transform: "translate(450px,16px)rotate(7deg)" },
//     { transform: "translate(500px,24px)rotate(8deg)" },
//     { transform: "translate(550px,25px)rotate(8deg)" },
//     { transform: "translate(600px,26px)rotate(8deg)" },
//     { transform: "translate(650px,35px)rotate(8deg)" },
//     { transform: "translate(700px,39px)" },
//     { transform: "translate(750px,18px)" },
//     { transform: "translate(800px,16px)" },
//     { transform: "translate(850px,0px)" },
//     { transform: "translate(900px,-4px)" },
//     { transform: "translate(950px,-10px)" },
//     { transform: "translate(1000px,0px)" }
//   ],
//   { duration: 16000, iterations: "Infinity" ,easing: "Linear"},
// );

// const botimation9 = petbot8.animate(
//   [
//  { transform: "translateY(0px)" },
//     { transform: "translateY(-50px)" },
//     { transform: "translateY(-100px)" },
//     { transform: "translateY(-150px)" },
//     { transform: "translateY(-200px)" },
//     { transform: "translate(4px,-250px)" },
//     { transform: "translate(7px,-300px)" },
//     { transform: "translate(9px,-350px)rotate(5deg)" },
//     { transform: "translate(11px,-400px)rotate(6deg)" },
//     { transform: "translate(16px,-450px)rotate(7deg)" },
//     { transform: "translate(24px,-500px)rotate(8deg)" },
//     { transform: "translate(25px,-550px)rotate(8deg)" },
//     { transform: "translate(26px,-600px,rotate(8deg)" },
//     { transform: "translate(35px,-650px)rotate(8deg)" },
//     { transform: "translate(39px,-700px)" },
//     { transform: "translate(18px,-750px)" },
//     { transform: "translate(16px,-800px)" },
//     { transform: "translate(5px,-850px)rotate(-9deg)" },
//     { transform: "translate(-2px,-900px)rotate(-8deg)" },
//     { transform: "translate(-8px,-950px)rotate(-9deg)" },
//     { transform: "translate(-10px,1000px)rotate(-9deg)" }
//   ],
//   { duration: 16000, iterations: "Infinity" ,easing: "Linear" },
// );

// const botimation10 = petbot9.animate(
//   [
//     { transform: "translateY(0px)" },
//     { transform: "translateY(50px)" },
//     { transform: "translateY(100px)" },
//     { transform: "translateY(150px)" },
//     { transform: "translateY(200px)" },
//     { transform: "translate(250px,5px)" },
//     { transform: "translate(300px,6px)" },
//     { transform: "translate(350px,6px)" },
//     { transform: "translate(400px,8px)" },
//     { transform: "translate(450px,10px)" },
//     { transform: "translate(500px,12px)" },
//     { transform: "translate(550px,17px)" },
//     { transform: "translate(600px,23px)" },
//     { transform: "translate(650px,29px)" },
//     { transform: "translate(700px,33px)" },
//     { transform: "translate(750px,38px)" },
//     { transform: "translate(800px,28px)" },
//     { transform: "translate(850px,16px)" },
//     { transform: "translate(900px,5px)" },
//     { transform: "translate(950px,-5px)" },
//     { transform: "translate(1000px,-8px)" }
//   ],
//   { duration: 16000, iterations: "Infinity" ,easing:"Linear"},
// );

// const botimation11 = petbot10.animate(
//   [
//      { transform: "translateY(0px)" },
//     { transform: "translateY(50px)" },
//     { transform: "translateY(100px)" },
//     { transform: "translateY(150px)" },
//     { transform: "translateY(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,5px)" },
//     { transform: "translate(350px,6px)" },
//     { transform: "translate(400px,8px)" },
//     { transform: "translate(450px,10px)" },
//     { transform: "translate(500px,14px)" },
//     { transform: "translate(550px,19px)" },
//     { transform: "translate(600px,25px)" },
//     { transform: "translate(650px,31px)" },
//     { transform: "translate(700px,35px)" },
//     { transform: "translate(750px,38px)" },
//     { transform: "translate(800px,24px)" },
//     { transform: "translate(850px,12px)" },
//     { transform: "translate(900px,5px)" },
//     { transform: "translate(950px,-5px)" },
//     { transform: "translate(1000px,-10px)" }
//   ],
//   { duration: 10000, iterations: "Infinity" ,easing:"Linear"},
// );

// const botimation12 = petbot11.animate(
//   [
//     { transform: "translateY(0px)" },
//     { transform: "translateY(50px)" },
//     { transform: "translateY(100px)" },
//     { transform: "translateY(150px)" },
//     { transform: "translateY(200px)" },
//     { transform: "translate(250px)" },
//     { transform: "translate(300px)" },
//     { transform: "translate(350px)" },
//     { transform: "translate(400px)" },
//     { transform: "translate(450px)" },
//     { transform: "translate(500px)" },
//     { transform: "translate(550px)" },
//     { transform: "translate(600px)" },
//     { transform: "translate(650px)" },
//     { transform: "translate(700px)" },
//     { transform: "translate(750px)" },
//     { transform: "translate(800px)" },
//     { transform: "translate(850px)" },
//     { transform: "translate(900px)" },
//     { transform: "translate(950px)" },
//     { transform: "translate(1000px)" }
//   ],
//   { duration: 10000, iterations: "Infinity" ,easing:"Linear"},
// );

// const botimation13 = petbot12.animate(
//   [
//      { transform: "translateY(0px)" },
//     { transform: "translateY(50px)" },
//     { transform: "translateY(100px)" },
//     { transform: "translateY(150px)" },
//     { transform: "translateY(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,5px)" },
//     { transform: "translate(350px,8px)" },
//     { transform: "translate(400px,11px)" },
//     { transform: "translate(450px,15px)" },
//     { transform: "translate(500px,19px)" },
//     { transform: "translate(550px,25px)" },
//     { transform: "translate(600px,30px)" },
//     { transform: "translate(650px,38px)" },
//     { transform: "translate(700px,44px)" },
//     { transform: "translate(750px,24px)" },
//     { transform: "translate(800px,16px)" },
//     { transform: "translate(850px,8px)" },
//     { transform: "translate(900px,-4px)" },
//     { transform: "translate(950px,-10px)" },
//     { transform: "translate(1000px,-12px)" }
//   ],
//   { duration: 10000, iterations: "Infinity" ,easing:"Linear"},
// );

// const botimation14 = petbot13.animate(
//   [
//     { transform: "translateY(0px)" },
//     { transform: "translateY(50px)" },
//     { transform: "translateY(100px)" },
//     { transform: "translateY(150px)" },
//     { transform: "translateY(200px)" },
//     { transform: "translate(250px,5px)" },
//     { transform: "translate(300px,6px)" },
//     { transform: "translate(350px,6px)" },
//     { transform: "translate(400px,8px)" },
//     { transform: "translate(450px,10px)" },
//     { transform: "translate(500px,12px)" },
//     { transform: "translate(550px,17px)" },
//     { transform: "translate(600px,23px)" },
//     { transform: "translate(650px,29px)" },
//     { transform: "translate(700px,33px)" },
//     { transform: "translate(750px,38px)" },
//     { transform: "translate(800px,28px)" },
//     { transform: "translate(850px,16px)" },
//     { transform: "translate(900px,5px)" },
//     { transform: "translate(950px,-5px)" },
//     { transform: "translate(1000px,-8px)" }
//   ],
//   { duration: 10000, iterations: "Infinity" ,easing:"Linear"},
// );

// const botimation15 = petbot14.animate(
//   [
//       { transform: "translateY(0px)" },
//     { transform: "translateY(50px)" },
//     { transform: "translateY(100px)" },
//     { transform: "translateY(150px)" },
//     { transform: "translateY(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,5px)" },
//     { transform: "translate(350px,6px)" },
//     { transform: "translate(400px,8px)" },
//     { transform: "translate(450px,10px)" },
//     { transform: "translate(500px,14px)" },
//     { transform: "translate(550px,19px)" },
//     { transform: "translate(600px,25px)" },
//     { transform: "translate(650px,31px)" },
//     { transform: "translate(700px,35px)" },
//     { transform: "translate(750px,38px)" },
//     { transform: "translate(800px,24px)" },
//     { transform: "translate(850px,12px)" },
//     { transform: "translate(900px,5px)" },
//     { transform: "translate(950px,-5px)" },
//     { transform: "translate(1000px,-10px)" }
//   ],
//   { duration: 10000, iterations: "Infinity" ,easing:"Linear"},
// );

// const botimation16 = petbot15.animate(
//   [
//      { transform: "translateY(0px)" },
//     { transform: "translateY(50px)" },
//     { transform: "translateY(100px)" },
//     { transform: "translateY(150px)" },
//     { transform: "translateY(200px)" },
//     { transform: "translate(250px,4px)" },
//     { transform: "translate(300px,5px)" },
//     { transform: "translate(350px,6px)" },
//     { transform: "translate(400px,9px)" },
//     { transform: "translate(450px,15px)" },
//     { transform: "translate(500px,17px)" },
//     { transform: "translate(550px,22px)" },
//     { transform: "translate(600px,28px)" },
//     { transform: "translate(650px,34px)" },
//     { transform: "translate(700px,38px)" },
//     { transform: "translate(750px,28px)" },
//     { transform: "translate(800px,18px)" },
//     { transform: "translate(850px,8px)" },
//     { transform: "translate(900px,1px)" },
//     { transform: "translate(950px,-6px)" },
//     { transform: "translate(1000px,-12px)" },
//   ],
//   { duration: 10000, iterations: "Infinity" ,easing:"Linear"},
// );
/* event handling----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

document.addEventListener("keydown", (e) => {
  const gen = document.getElementById("b1");
  con.innerText = counter++;
  e.preventDefault();
  let col = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  if(e.code === "Space"){
    spacebar.innerText = "Spacebar";
    spacebar.style.color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    spacebar.style.transform = `translate(${random(850)}px , ${random(400)}px)`;
    e.preventDefault();
    setTimeout(() => {
    spacebar.innerText = "";
  }, 3000);
  }
  if ((gen.innerText = e.key.toUpperCase())) {
    playBtn();
    console.log(e);
    gen.style.transform = `translate(${random(1200)}px , ${random(400)}px)`;
  }

    
    gen.style.color = col;
    setTimeout(() => {
    gen.innerText = "";
    }, 3000);
    if (counter == 2) {
    playBgm();
    }
  
    if(con.innerText%50===0){
    trophy.innerText = medal++;
    }
    
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
    loadation.play();
    lightingNightMode() ;
    setTimeout(()=>{
      screen.innerText = "Ready for some fun?"
    },0);
     setTimeout(()=>{
      screen.innerText = "Every tap is an adventure!"
      screen.style.fontSize = "0.9rem";
    },5000);

    animation0.play();
    animation1.play(); 
    animation2.play();
    animation3.play();
    animation4.play();
    animation5.play();
 })


 