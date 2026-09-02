function fearNotLetter (str) {
  let met = str.split("");
  let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let h = alphabets.indexOf(met[0]);
  for(let i=0; i<met.length; i++){
  
  console.log(met[i]!=alphabets[h]);
     
  for(char in met){
    return char;
  }

  }
}



console.log(fearNotLetter("stvwx"));




let arr = []
let res = []

function largestOfAll (arr) {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){

let a = arr[i][j]>arr[i][j+1]?arr[i][j]:arr[i][j+1];

 ;

       } 
    }
  }


console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));