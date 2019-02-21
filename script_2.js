console.log("coucou depuis la console");

answer = prompt("De quel nombre veut tu calculer la factorielle ?");
let numbers = Number(answer);


for(let count = numbers - 1; count >= 1; count--){
  numbers = numbers * count
  console.log(numbers)
  
}
//console.log(numbers)