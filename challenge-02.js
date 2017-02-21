function sum(x,y){
  return x+y;
}
var mySum = sum(10, 2);
console.log(mySum);

var myVar;
function addVar() {
  myVar = 'New value';
  return 'The value of var its ' + myVar;
}
console.log(addVar(myVar) + ' ' + myVar);
console.log(myVar);

function sum3(x,y,z) {
  if(x == null || y == null || z == null){
    return 'Fill in all blank spaces'
  }
  else{
    return (x*y)*z+2;
  }
}
console.log('Soma: ' + sum3(2,5,2));

function myFunction(x,y,z) {
  if(x != null && y != null && z != null){
    return (x+y)/z;
  }
  else if(x != null && y == null && z == null){
    return x;
  }
  else if(x != null && y != null && z == null){
    return x+y;
  }
  else if(x == null && y == null && z == null){
    return false;
  }
  else{
    return null;
  }
}
console.log(myFunction(10,20,3));
