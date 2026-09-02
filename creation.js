for(let i=0; i<70; i++){
let createParty = document.createElement("div");    
let insert = document.querySelector(".pbox");  
insert.prepend(createParty);
createParty.classList.add("hurray");                                                                                                                                                                                                                                                                                                                          
}

for(let i=0; i<70; i++){
let creationParty = document.getElementsByClassName("hurray")[i]; 
creationParty.classList.add(`party${i}`);                                                                                                                                                                                                                                                                                                                  
}
  


/* petbot creation----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/


for(let i=0; i<17; i++){
let createPet = document.createElement("div");   
let inserting = document.querySelector(".top");    
inserting.append(createPet);      
createPet.classList.add("p");    
                                                                                                                                                                                                                                                                                                    
}

for(let i=0; i<17; i++){
let creatingPet = document.getElementsByClassName("p")[i]; 
creatingPet.classList.add(`petbot${i}`);                                                                                                                                                                                                                                                                                                                  
}

/* balloon creation----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

for(let i=0; i<6; i++){
let createBall = document.createElement("div");   
let insert = document.querySelector(".pbox");  
insert.append(createBall);
createBall.classList.add("anime");                                                                                                                                                                                                                                                                                                                          
}

for(let i=0; i<6; i++){
let creationBall = document.getElementsByClassName("anime")[i]; 
creationBall.classList.add(`ball${i}`);                                                                                                                                                                                                                                                                                                                  
}

/* panda creation----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

for(let i=0; i<16; i++){
let createPanda = document.createElement("div");   
let insertPan = document.querySelector(".panda");  
insertPan.append(createPanda);
createPanda.setAttribute("id",`pan${i}`);                                                                                                                                                                                                                                                                                                                        
}
