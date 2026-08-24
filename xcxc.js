let lunches = [];


function addLunchToEnd(arr,str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`)
  return arr;
}

function addLunchToStart(arr, str){
   arr.unshift();
   console.log(`${str} added to the start of the lunch menu.`)
   return arr;
}

function removeLastLunch(arr){
   let b = arr.pop();
   if(b!=""){
   console.log(`${b} removed from the end of the lunch menu.`);
   }
   else if(arr.length > 0 ){
    console.log("No lunches to remove")
   }
   return arr;
}

function removeFirstLunch(arr){
   let a = arr.shift();
   if (a!=""){
   console.log(`${a} removed from the start of the lunch menu.`)}
   else if (arr.length > 0){
    console.log("No lunches to remove")
   }
   return arr;
}

function getRandomLunch(arr){
   let c = arr[`${random(arr.length-1)}`]
   if(c != ""){
   console.log(`Randomly selected lunch: ${c}`);
   }if (arr.length > 0){
    console.log("No lunches available.")
   }
   return arr;
}

function showLunchMenu(arr){
   if(arr.length>0){
   console.log("Menu items:", arr.tostring());
   }else{ 
    console.log("The menu is empty.")
   }
}

function random(number){
  return Math.floor(Math.random()*number)+1;
}

console.log(removeLastLunch());