function findLongestWordLength (str) {
  let val2 = str.split(" ");
    for(let i=0; i<val2.length-1; i++){
      
    if(val2[i]==val2[val2.length-2]){ ; 
       return val2[i].length > val2[i+1].length ? val2[i].length : val2[i+1].length ;
      }
    }
  }


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


let arr = [];
let num;
function chunkArrayInGroups (arr,num){
   

for(let i=0; i<arr.length; i+num){
   let arr2 = [] ;
   let arr1 = arr.splice([i],num);
   arr2.push(arr1);
   
   return arr2 ;
   }
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property){
    if(contacts[0].firstName==name)
      {
      {
      if(property == "lastName"){
        console.log(contacts[0].lastName) ;
      }else{
        console.log("No such contact") ;
      }}
      {if(property == "number"){
        console.log(contacts[0].number) ;
      }else{
        console.log("No such contact") ;
      }}
      {if(property == "likes"){
        console.log(contacts[0].likes) ;
      }else{
      console.log("No such property");
      }}
    }
  }
      
      


console.log(lookUpProfile("Akira", "lastName"));