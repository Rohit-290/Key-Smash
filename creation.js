for(let i=0; i<70; i++){
let createparty = document.createElement("div");    
let insert = document.querySelector(".pbox");  
insert.prepend(createparty);
createparty.classList.add("hurray");                                                                                                                                                                                                                                                                                                                          
}

for(let i=0; i<70; i++){
let creationparty = document.getElementsByClassName("hurray")[i]; 
creationparty.classList.add(`party${i}`);                                                                                                                                                                                                                                                                                                                  
}
  


/* petbot creation----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/


for(let i=0; i<17; i++){
let createpet = document.createElement("div");   
let inserting = document.querySelector(".top");    
inserting.append(createpet);      
createpet.classList.add("p");    
                                                                                                                                                                                                                                                                                                    
}

for(let i=0; i<17; i++){
let creatingpet = document.getElementsByClassName("p")[i]; 
creatingpet.classList.add(`petbot${i}`);                                                                                                                                                                                                                                                                                                                  
}

/* balloon creation----------------------------------------------xxxxx-----------------------------------------------xxxxxxxxxxxxxxxxxxxx--------------------------------------------------------------------------*/

for(let i=0; i<6; i++){
let createball = document.createElement("div");   
let insert = document.querySelector(".pbox");  
insert.append(createball);
createball.classList.add("anime");                                                                                                                                                                                                                                                                                                                          
}

for(let i=0; i<6; i++){
let creationball = document.getElementsByClassName("anime")[i]; 
creationball.classList.add(`ball${i}`);                                                                                                                                                                                                                                                                                                                  
}
  
