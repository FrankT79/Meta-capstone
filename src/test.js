function getnames(array){
  let result = [];
  
  for(let ar of array){
    if(ar.name){
      
      result.push(ar.name);
    }
    
  }
  return result;
}

console.log("getnames", getnames([
  {a:1},
  {name: "john"},
  {name: "Tiffany"},
  {b:3}
]))