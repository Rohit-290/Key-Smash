let questions = [
  obj1 = { 
    category: "History" ,
    question: "Archduke Franz Ferdinand was heir to which empire ?" ,
    choices: ["Prussian","Ottoman","Austro-Hungarian"] ,
    answer: "Austro-Hungarian" ,
  },
  obj2 = {
    category: "Science" ,
    question: "What is known as powerhouse of a cell?" ,
    choices: ["Mitochondria","Ribosomes","Vacoules"],
    answer: "Mitochondria" ,
  },
  obj3 = {
    category: "Geography" ,
    question: "Which mountain range borders Europe and Asia?" ,
    choices: ["The Himalayan","The Alps","Ural"] ,
    answer: "Ural" ,
  },
  obj4 = {
    category: "Astronomy" ,
    question: "How many moons does Mars has?" ,
    choices: ["1","2","3"] ,
    answer: "3" ,
  },
  obj5 = {
    category: "Computer Science" ,
    question: "Who is known as the father of World Wide Web?" ,
    choices: ["Tim Berners Lee","Charles Babbage","Steve Jobs"] ,
    answer: "Tim Berners Lee" ,
  },
];

function getRandomQuestion ([]){
   return questions[`${(random(5))}`].question
} 

function getRandomComputerChoice ([]){
   return questions[`${(random(5))}`].choices[`${(random(3))}`]
} 

console.log(getRandomQuestion(questions))
console.log(getRandomComputerChoice(questions))



function random(number){
  return Math.floor(Math.random()*number) ;
}