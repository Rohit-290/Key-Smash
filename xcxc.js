let man = { 
   containerId: null, 
   destination: "Santa Cruz",
   weight: 304,
   unit: "kg", 
   hazmat:false
}

function normalizeUnits (manifest) {
let copy = {...manifest} ;
  if(manifest.unit!=kg){
    manifest.weight = manifest.weight*0.45;
    manifest.unit = "kg"
  }
  return copy ; 
}

function validateManifest (manifest) {
let copy = {...manifest}
if(copy.containerId>0 && copy.containerId.isInteger() && copy.destination != null && copy.weight>0 && copy.unit != null && copy.hazmat != null){
  return new Object() ;
}else if(copy=={}) {
  copy.containerId = "Missing";
  copy.destination = "Missing";
  copy.weight = "Missing";
  copy.unit = "Missing";
  copy.hazmat = "Missing";
  return copy ;
}else if(copy.containerId==null && copy.destination != null && copy.weight>0 && copy.unit != null && copy.hazmat != null){
  copy.containerId = "Invalid" ;
  return copy.containerId ;
} 
}

console.log(validateManifest(man));