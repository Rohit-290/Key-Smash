let normalizeUnits = (manifest) => {
let copy = {...manifest} 
  if(copy.unit!="kg"){
    copy.weight = manifest.weight*0.45;
    copy.unit = "kg"
  }
  return copy ; 
}

let validateManifest = (manifest) => {
let copy = {...manifest}
if(copy.containerId>0 && Number.isInteger(copy.containerId) && copy.destination != null && copy.weight>0 && copy.unit != null && copy.hazmat == "boolean"){
  return new Object() ;
}else if(copy.containerId==null && copy.destination != null && copy.weight>0 && copy.unit != null && typeof copy.hazmat == "boolean"){
  copy.containerId = "Invalid" ;
  return copy.containerId ;
}
else if(copy=={}) {
  copy.containerId = "Missing";
  copy.destination = "Missing";
  copy.weight = "Missing";
  copy.unit = "Missing";
  copy.hazmat = "Missing";
  return copy ;
}else if(copy.containerId == null){
  return {containerId: "Invalid"} ;
}else if(copy.containerId == 0 && Number.isInteger(copy.destination) == true && copy.weight<0 && copy.unit != "kg" && copy.unit =="lb" && typeof copy.hazmat != "boolean"){
  copy.containerId = "Invalid";
  copy.destination = "Invalid";
  copy.weight = "Invalid";
  copy.unit = "Invalid";
  copy.hazmat = "Invalid"; 
  return copy ;
}else if(copy.containerId < 0){
  copy.containerId = "Invalid";
  copy.destination = "Missing";
  copy.weight = "Missing";
  copy.unit = "Missing";
  copy.hazmat = "Missing"; 
  return copy ;
}else if(number.isInteger(copy.conatainerId) = false){
  copy.containerId = "Invalid"
  copy.destination = "Missing";
  copy.weight = "Missing";
  copy.unit = "Missing";
  copy.hazmat = "Missing"; 
  return copy ;
}else if(trim(copy.destination) = null){
  copy.containerId = "Missing"
  copy.destination = "Invalid";
  copy.weight = "Missing";
  copy.unit = "Missing";
  copy.hazmat = "Missing"; 
  return copy ;
}else if(Number.isNaN(copy.weight) == true){
  copy.containerId = "Missing";
  copy.destination = "Missing" ;
  copy.weight = "Invalid";
  copy.unit = "Missing";
  copy.hazmat = "Missing"; 
  return copy ;
}
}


let processManifest = (manifest) => {
  if(Number.isInteger(manifest.containerId) == true && manifest.containerId>0 && isNaN(manifest.destination)== true && manifest.destination!= null && Number.isInteger(manifest.weight) == true && manifest.weight>0 && manifest.unit != "kg" && manifest.unit != "lb" && typeof manifest.hazmat == "boolean"){
  console.log(`Validation success: ${manifest.containerId}`);
  normalizeUnits(manifest);
  console.log(`Total weight:${manifest.weight}`);
}else if(manifest.containerId<0 && Number.isNaN(manifest.weight)==true && Number.isInteger(manifest.destination)==false && manifest.destination != null){
    console.log(`Validation error:${manifest.containerId}`)
    manifest.containerId = "Invalid";
    manifest.weight = "Invalid";
    manifest.unit = "Missing";
    manifest.hazmat = "Missing";
    console.log(manifest);
}else if(manifest.containerId == null && manifest.weight == null && Number.isInteger(manifest.destination)==false && typeof manifest.hazmat == "boolean"){
  console.log("Validation error: undefined");
  manifest.containerId = "Missing";
  manifest.weight = "Missing";
  manifest.unit = "Missing";
  console.log(manifest);
}else if(manifest.containerId <= 0  && Number.isInteger(manifest.destination) == true && manifest.weight<0 && manifest.unit != "kg" &&manifest.unit == "lb" && typeof manifest.hazmat != "boolean"){
 console.log(`Validation error: ${manifest.containerId}`
 );
 console.log(validateManifest(manifest))
}
}



const maskEmail = (email) => {
  let a = email.slice(0,1);
  let b = email.slice(email.indexOf("@")-1);
  let d = email.indexOf("@");
  for(i=1; i<d-1; i++){
   a += "*";
  }
  console.log(b);
  return a+b ;
}
console.log(maskEmail("freecodecamp@example.com"));

function getRandomLunch(arr){
   let c = arr[random(arr.length)];
   if (arr.length==0){
    console.log("No lunches available.");
   }
   else{
   console.log(`Randomly selected lunch: [${c}]`);
   }
}
 
let ar = ["Sushi", "Pizza", "Burger"] ;
console.log(getRandomLunch(ar));

function showLunchMenu(arr){
   if(arr.length==0){ 
    console.log("The menu is empty.");
   }
   else{
   console.log("Menu items:", arr.toString());
   }
}


function random(number){
  return Math.floor(Math.random()*number);
}

console.log(showLunchMenu(ar));



const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];



golfScore = (par , strokes)=>{
if(par>=1&&strokes==1){
  return "Hole-in-one" ;  
}else if(strokes<=par-2){
  return "Eagle" ;
}else if(strokes==par-1){
  return "Birdie" ;
}else if(strokes==par&&strokes>1&&par>1){
  return "Par" ;
}else if(strokes==par+1){
  return "Bogey" ;
}else if(strokes==par+2){
  return "Double Bogey" ;
}else if(strokes>=par+3){
  return "Go Home!";
}
}

console.log(golfScore(4,8));

const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

let runSequence = (config,cycles) => {
    if(config.phases==""){
      console.log("No phases found");
    }else{ if(config.fault==true){
      console.log("Faulted phase!");
    }else if(config.phases.duration<=0){
      console.log("Invalid phase detected");
    }else{
      for(let phase of config.phases){
        for(let i=0;i<=cycles;i++){
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
     }
    }
  }
}


let generateTimeline = (config,cycles) => {
for(let phase in config.phases){
  // console.log(config.phases[phase]);
 for(let nphase in config.phases[phase]){
  console.log(`${duration}`);
 }
}
}

console.log(generateTimeline(config1, 1));