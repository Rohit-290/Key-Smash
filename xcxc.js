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