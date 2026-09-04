let questions = [
   { 
    category: "History" ,
    question: "Archduke Franz Ferdinand was heir to which empire ?" ,
    choices: ["Prussian","Ottoman","Austro-Hungarian"] ,
    answer: "Austro-Hungarian" ,
  },
   {
    category: "Science" ,
    question: "What is known as powerhouse of a cell?" ,
    choices: ["Mitochondria","Ribosomes","Vacoules"],
    answer: "Mitochondria" ,
  },
   {
    category: "Geography" ,
    question: "Which mountain range borders Europe and Asia?" ,
    choices: ["The Himalayan","The Alps","Ural"] ,
    answer: "Ural" ,
  },
   {
    category: "Astronomy" ,
    question: "How many moons does Mars has?" ,
    choices: ["1","2","3"] ,
    answer: "2" ,
  },
   {
    category: "Computer Science" ,
    question: "Who is known as the father of World Wide Web?" ,
    choices: ["Tim Berners Lee","Charles Babbage","Steve Jobs"] ,
    answer: "Tim Berners Lee" ,
  },
];

function getRandomQuestion (questions){
   return questions[`${(random(5))}`];
} 

let z = questions[`${(random(5))}`].choices  ;
let  c = function getRandomComputerChoice (z){
   return z[`${(random(2))}`];
} 




let a = questions[`${(random(5))}`];
// let c = questions[`${(random(5))}`].choices[`${(random(3))}`];
function getResults (a, c){
   let e = a.answer;
  if(e === c){
    return "The computer's choice is correct!" ;
  }else{
    return "The computer's choice is wrong." + "The correct answer is:" + e ;
  }

}

console.log(getRandomQuestion(questions));
console.log(getRandomComputerChoice(questions));
console.log(getResults(questions));



function random(number){
  return Math.floor(Math.random()*number) ;
}










let normalizeUnits = (manifest) => {
let copy = {...manifest} 
  if(copy.unit=="lb"){
    copy.weight = copy.weight*0.45;
    copy.unit = "kg"
  }
  return copy ; 
}

let validateManifest = (manifest) => {
let copy = {...manifest}
if(copy.containerId>0 && Number.isInteger(copy.containerId) && copy.destination != null && copy.weight>0 && copy.unit != null && typeof copy.hazmat === boolean){
  return new Object() ;
}else if(copy.containerId==null && copy.destination != null && copy.weight == null && copy.unit != null && copy.hazmat == null){
  copy.containerId = "Missing";
  copy.destination = "Missing";
  copy.weight = "Missing";
  copy.unit = "Missing";
  copy.hazmat = "Missing";
  return copy ;
}else if(copy.containerId==null && copy.destination != null && copy.weight == null && copy.unit != null && typeof copy.hazmat == "boolean"){
  copy.containerId = "Invalid" ;
  return copy.containerId ;
}
else if(copy.containerId == null){
  return {containerId: "Invalid"} ;
}else if(copy.containerId == 0 && Number.isInteger(copy.destination) == true && copy.weight<0 && copy.unit != "kg" && copy.unit == "pounds" && typeof copy.hazmat != "boolean"){
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
}else if(copy.destination.trim() = null){
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
  if(Number.isInteger(manifest.containerId) == true && manifest.containerId>0 && isNaN(manifest.destination)== true && manifest.destination!= null && Number.isInteger(manifest.weight) == true && manifest.weight>0 && manifest.unit != "kg" && manifest.unit != "lb" && typeof manifest.hazmat == boolean){
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
}else if(manifest.containerId == null && manifest.weight == null && Number.isInteger(manifest.destination)==false && typeof manifest.hazmat == boolean){
  console.log("Validation error: undefined");
  manifest.containerId = "Missing";
  manifest.weight = "Missing";
  manifest.unit = "Missing";
  console.log(manifest);
}else if(manifest.containerId <= 0  && Number.isInteger(manifest.destination) == true && manifest.weight<0 && manifest.unit != "kg" &&manifest.unit == "lb" && typeof manifest.hazmat != boolean){
 console.log(`Validation error: ${manifest.containerId}`
 );
 console.log(validateManifest(manifest))
}
}
